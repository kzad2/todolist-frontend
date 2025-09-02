import { useEffect, useState, useCallback } from "react";
import TaskController from "../../controllers/TaskController";
// import PaymentController from "../../controllers/PaymentController";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import moment from "moment/moment";

function TodoList() {
    const [modal, setModal] = useState(false);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: "",
        description: "",
        deadline: "",
        video: "",
        image: null,
    });

    const { task, getTask, storeTask, deleteTask, deleteAllTasks, success, error, clearMessage } =
        TaskController();

    useEffect(() => {
        if (success) {
            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: success,
                timer: 2000,
                showConfirmButton: false,
            });
            clearMessage();
        }
        if (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal!",
                text: error,
            });
            clearMessage();
        }
    }, [success, error, clearMessage]);

    const handleStoreTask = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: editId ? "Menyimpan perubahan..." : "Menyimpan...",
            text: "Mohon tunggu sebentar...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== null && value !== undefined && !(key === 'video' && value === "")) {
                formData.append(key, value);
            }
        });

        if (form.image instanceof File) {
            formData.append('image', form.image);
        } else if (editId && form.image === null && !task?.find(t => t.id === editId)?.image) { 
            // ...
        }

        try {
            await storeTask(formData, editId);
            setForm({
                title: "",
                description: "",
                deadline: "",
                video: "",
                image: null,
            });
            setEditId(null);
            setModal(false);
        } catch (err) {
            console.error("Error saving task:", err);
        } finally {
            Swal.close();
        }
    };

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            await getTask();
        } catch (error) {
            console.error("Gagal mengambil task:", error);
        } finally {
            setLoading(false);
        }
    }, [getTask]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const extractYouTubeId = (url) => {
        const match = url.match(
            /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
        );
        return match ? match[1] : null;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
        clearMessage();
    };

    const openAddModal = () => {
        const isPremium = localStorage.getItem("user_status") === "premium";
        if (!isPremium && task && task.length >= 10) {
            Swal.fire({
                title: "Upgrade ke Premium",
                text: "Akun gratis hanya bisa menambahkan 3 todo. Upgrade ke premium sekarang?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Lihat Plan",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/plans";
                }
            });
            return;
        }

        setForm({
            title: "",
            description: "",
            deadline: "",
            video: "",
            image: null,
        });
        setEditId(null);
        setModal(true);
    };

    const openEditModal = (taskToEdit) => {
        setEditId(taskToEdit.id);
        setForm({
            title: taskToEdit.title,
            description: taskToEdit.description,
            deadline: taskToEdit.deadline ? moment(taskToEdit.deadline).format('YYYY-MM-DD') : '',
            video: taskToEdit.video || "",
            image: null,
        });
        setModal(true);
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Yakin ingin menghapus?",
            text: "Data tidak bisa dikembalikan setelah dihapus!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#aaa",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
        });

        if (result.isConfirmed) {
            Swal.fire({
                title: "Menghapus...",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(),
            });
            try {
                await deleteTask(id);
            } catch (err) {
                console.error("Error deleting task:", err);
            } finally {
                Swal.close();
            }
        }
    };

    const handleDeleteAll = async () => {
        const result = await Swal.fire({
            title: "Yakin ingin menghapus SEMUA Todo?",
            text: "Tindakan ini tidak bisa dibatalkan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#aaa",
            confirmButtonText: "Ya, Hapus Semua!",
            cancelButtonText: "Batal",
        });

        if (result.isConfirmed) {
            Swal.fire({
                title: "Menghapus Semua...",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(),
            });
            try {
                await deleteAllTasks();
            } catch (err) {
                console.error("Error deleting all tasks:", err);
            } finally {
                Swal.close();
            }
        }
    };

    return (
        <>
            <div className="bg-[#004030] mb-6 py-5 px-5 rounded-md shadow-lg">
                <h1 className="font-bold text-3xl text-white">Daftar Todo Anda</h1>
            </div>

            <div className="flex justify-between items-center mb-6">
                <button
                    className="font-medium bg-[#004030] hover:bg-[#4A9782] text-white text-lg px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={openAddModal}
                >
                    <i className="fa-solid fa-plus mr-2"></i> Tambah Todo Baru
                </button>

                {task && task.length > 0 && (
                    <button
                        className="font-medium bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={handleDeleteAll}
                    >
                        <i className="fa-solid fa-trash-can mr-2"></i> Hapus Semua
                    </button>
                )}
            </div>

            {modal && (
                <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div
                        className="bg-[#004030] rounded-xl shadow-2xl p-8 w-full max-w-lg border border-emerald-700"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <h2 className="text-2xl text-white font-bold mb-6 text-center">
                            {editId ? "Edit Todo" : "Tambah Todo Baru"}
                        </h2>
                        <form onSubmit={handleStoreTask}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-200 text-sm font-semibold mb-2">Judul Task</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Masukkan judul todo"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-200 text-sm font-semibold mb-2">Deskripsi</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-y"
                                    rows="4"
                                    placeholder="Deskripsikan todo Anda"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="deadline" className="block text-gray-200 text-sm font-semibold mb-2">Batas Waktu</label>
                                <input
                                    type="date"
                                    id="deadline"
                                    name="deadline"
                                    value={form.deadline}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-gray-200 text-sm font-semibold mb-2">Gambar (opsional)</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleChange}
                                    accept="image/*"
                                    className="w-full bg-gray-700 border border-gray-600 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600"
                                />
                                {editId && task?.find(t => t.id === editId)?.image && (
                                    <p className="text-gray-400 text-xs mt-1">Gambar saat ini: {task.find(t => t.id === editId).image.split('/').pop()}</p>
                                )}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="video" className="block text-gray-200 text-sm font-semibold mb-2">Link Video YouTube (opsional)</label>
                                <input
                                    type="url"
                                    id="video"
                                    name="video"
                                    value={form.video}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setModal(false)}
                                    className="px-6 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-semibold transition duration-300 ease-in-out"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
                                >
                                    {editId ? "Simpan Perubahan" : "Tambah Todo"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {loading ? (
                <div className="bg-[#004030] py-10 px-6 rounded-md text-center mt-8 shadow-inner">
                    <span className="loading loading-spinner text-emerald-400 text-5xl"></span>
                    <p className="text-gray-300 mt-5 text-lg animate-pulse">Sedang memuat daftar todo Anda...</p>
                </div>
            ) : task?.length === 0 ? (
                <div className="bg-[#004030] py-10 px-6 rounded-md text-center mt-8 shadow-inner">
                    <p className="text-white text-xl font-medium">Belum ada todo yang ditambahkan.</p>
                    <p className="text-gray-400 mt-2">Ayo, tambahkan todo pertama Anda sekarang!</p>
                </div>
            ) : (
              
                // card todo
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {task?.map((taskItem) => (
                        <div
                            key={taskItem.id}
                            className="bg-[#004030] rounded-xl p-6 shadow-xl border border-emerald-800 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <div className="justify-between items-start mb-3">
                                <Link
                                  to={`/todo-list-detail/${taskItem.id}`}
                                  className="block text-center text-2xl font-bold text-emerald-300 hover:text-emerald-100 hover:underline transition-colors duration-200 leading-tight"
                                >
                                  {taskItem.title}
                                </Link><hr className="my-2 border-gray-600" />

                                <div className="flex space-x-3 text-lg">
                                    <button
                                        className="text-blue-400 hover:text-blue-200 transition-colors duration-200"
                                        onClick={(e) => { e.preventDefault(); openEditModal(taskItem); }}
                                        title="Edit Todo"
                                    >
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-300 transition-colors duration-200"
                                        onClick={(e) => { e.preventDefault(); handleDelete(taskItem.id); }}
                                        title="Hapus Todo"
                                    >
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                                {taskItem.description}
                            </p>

                            {taskItem.deadline && (
                                <p className="text-gray-400 text-xs mb-3 flex items-center">
                                    <i className="fa-regular fa-calendar-alt mr-2"></i>
                                    Batas Waktu: <span className="font-semibold ml-1">{moment(taskItem.deadline).format('DD MMMM YYYY')}</span>
                                </p>
                            )}

                            {taskItem.video && extractYouTubeId(taskItem.video) ? (
                                <div className="mt-4 rounded-lg overflow-hidden shadow-md aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${extractYouTubeId(taskItem.video)}`}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Video Preview"
                                    ></iframe>
                                </div>
                            ) : taskItem.image ? (
                            <img
                                src={`${import.meta.env.VITE_API_URL}/${taskItem.image}`}
                                alt="Preview"
                                className="mt-3 w-full h-48 object-cover rounded"
                            />
                        ) : (
                            <div className="mt-3 w-full h-48 bg-gray-700 rounded flex items-center justify-center text-gray-400">
                                Tidak ada preview
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default TodoList;