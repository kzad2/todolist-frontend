import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      window.scrollTo({
        top: mainContent.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [pathname]); 

  return null;
}

export default ScrollToTop;