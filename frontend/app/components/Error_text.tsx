'use client';

import { useState, useRef, useEffect } from 'react';

const ErrorText = () => {
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <>
      

      {/* Overlay with frosted glass effect */}
      {open && (
        <div className="fixed inset-0 z-40 backdrop-blur-md bg-black/30 transition-opacity" />
      )}

      {/* Sidebar */}
      <div
      onClick={() => setOpen(false)}
        ref={sidebarRef}
        className={`fixed z-50 max-w-3xl w-full p-4  transition-all duration-0 shadow-2xl rounded-xl
            ${open ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 visible' : 'opacity-0 invisible'}
          `}
      >            {/* Section 3: The Working Framework */}
      <section className="space-y-4 border-l-4 border-red-500 pl-6">
        {/* <h2 className="text-2xl font-semibold text-green-300">🛠️ The Framework</h2> */}
        <p className="text-l font-semibold text-red-300">
        The Pi I was running the backend on decided to retire early 🥲 A new one is on the way, so things will be back up and running once it lands! You can still read about framework in meanwhile :)
        </p>
      </section>
      </div>
            {open && (
  <div className="fixed bottom-15 left-1/2 transform -translate-x-1/2 text-center text-white z-50">
    <p className="text-lg">Reach out to me at:</p>
    <a
      href="mailto:siddharth22sharma@gmail.com"
      title="Email"
      className="text-white hover:underline text-lg"
    >
      siddharth22sharma@gmail.com
    </a>
  </div>
)}
      
    </>
  );
};

export default ErrorText;
