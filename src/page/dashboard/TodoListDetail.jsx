import { useEffect, useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SubtaskController from "../../controllers/SubtaskController";

function TodoListDetail() {
  const { id: taskId } = useParams();
  const {
    subtasks,
    error,
    success,
    getSubtasks,
    createSubtask,
    updateSubtask,
    deleteSubtask,
    changeStatus,
    clearMessage,
  } = SubtaskController();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSubtask, setCurrentSubtask] = useState(null);
  const [form, setForm] = useState({ title: "" });

  const columns = [
    { key: "pending", title: "Pending" },
    { key: "in_progress", title: "In Progress" },
    { key: "completed", title: "Done" },
  ];

  const fetchSubtasks = useCallback(async () => {
    Swal.fire({
      title: "Memuat subtasks...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await getSubtasks(taskId);
      Swal.close();
    } catch (err) {
      console.error("Error fetching subtasks:", err);
    }
  }, [getSubtasks, taskId]);

  useEffect(() => {
    fetchSubtasks();
  }, [fetchSubtasks]);

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
        titleText: "Gagal!",
        text: error,
      });
      clearMessage();
    }
  }, [success, error, clearMessage]);

  const groupedTasks = useCallback(() => {
    const grouped = { pending: [], in_progress: [], completed: [] };
    subtasks.forEach((item) => {
      if (item.status && ['pending', 'in_progress', 'completed'].includes(item.status)) {
        grouped[item.status].push({ id: String(item.id), title: item.title, status: item.status });
      }
    });
    return grouped;
  }, [subtasks]);

  const openAddModal = () => {
    setIsEditing(false);
    setForm({ title: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (subtask) => {
    setIsEditing(true);
    setCurrentSubtask(subtask);
    setForm({ title: subtask.title });
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    Swal.fire({
      title: "Menyimpan...",
      text: "Mohon tunggu sebentar",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      if (isEditing) {
        await updateSubtask(currentSubtask.id, form);
      } else {
        await createSubtask(taskId, form);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error submitting subtask:", err);
    } finally {
      Swal.close();
    }
  };

  const handleDeleteSubtask = async (id) => {
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

    if (!result.isConfirmed) return;

    Swal.fire({
      title: "Menghapus...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      await deleteSubtask(id);
    } catch (err) {
      console.error("Error deleting subtask:", err);
    } finally {
      Swal.close();
    }
  };

  const handleDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const movedItemId = parseInt(result.draggableId);
    // const oldStatus = source.droppableId;
    const newStatus = destination.droppableId;

    const currentSubtasks = [...subtasks];
    const subtaskToMove = currentSubtasks.find(s => String(s.id) === result.draggableId);

    if (!subtaskToMove) return;

    const updatedSubtasksOptimistically = currentSubtasks.map(s => 
      String(s.id) === result.draggableId ? { ...s, status: newStatus } : s
    );
    
    SubtaskController.setState({ subtasks: updatedSubtasksOptimistically });

    try {
      await changeStatus(movedItemId, newStatus);
    } catch (err) {
      console.error("Failed to change subtask status:", err);
      SubtaskController.setState({ subtasks: currentSubtasks });
    }
  };

  const renderGroupedTasks = groupedTasks();

  return (
    <>
      <div className="bg-[#004030] mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-white">Todo List Detail</h1>
      </div>

      <button
        onClick={openAddModal}
        className="font-medium bg-[#004030] hover:bg-[#4A9782] text-white text-lg px-4 py-2 rounded-md mb-6"
      >
        Tambah Subtask
      </button>

      {isModalOpen && (
        <div className="fixed px-6 inset-0 bg-black/40 flex backdrop-blur items-center justify-center z-50">
          <div className="bg-[#004030] p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-white">
              {isEditing ? "Edit Subtask" : "Tambah Subtask"}
            </h2>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ title: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded mb-4 text-white bg-gray-700"
              placeholder="Judul subtask"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.key}
              className="bg-[#004030] rounded-md p-5 min-h-[200px] flex flex-col"
            >
              <h2 className="font-semibold text-center text-xl text-white mb-3">
                {col.title}
              </h2>
              <hr className="text-gray-300 mb-4" />
              <Droppable droppableId={col.key}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 space-y-3 transition-all p-2 rounded-md ${
                      snapshot.isDraggingOver ? "bg-emerald-700" : ""
                    }`}
                    style={{ minHeight: "50px" }}
                  >
                    {renderGroupedTasks[col.key].length === 0 && (
                      <p className="text-gray-400 text-center italic mt-4">No subtasks here.</p>
                    )}
                    {renderGroupedTasks[col.key].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white px-4 py-2 flex justify-between items-center rounded-md shadow-sm border border-gray-800"
                          >
                            <p className="text-gray-800">{item.title}</p>
                            <div className="flex space-x-2">
                              <button
                                className="text-blue-400 hover:text-blue-500 text-xl"
                                onClick={() => openEditModal(item)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>
                              <button
                                className="text-red-500 hover:text-red-600 text-xl"
                                onClick={() => handleDeleteSubtask(item.id)}
                              >
                                <i className="fa-regular fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </>
  );
}

export default TodoListDetail;