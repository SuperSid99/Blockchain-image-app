'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  LogoGithub,
  LogoLinkedin,
//   MailOutline,
  HomeOutline,
  MenuOutline,
  CloseOutline,
  DocumentOutline,
} from 'react-ionicons';

const StickySidebar = () => {
  const [open, setOpen] = useState(false);
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
      {/* Pill Button */}
      {!open && (
        <button
          className="fixed top-1/2 right-4 z-50 bg-cyan-400 hover:bg-cyan-600 text-white px-1 py-5 rounded-full shadow-md flex items-center gap-2"
          onClick={() => setOpen(true)}
        >
          <MenuOutline height="24px" width="24px" color="#fff" />
        </button>
      )}

      {/* Overlay with frosted glass effect */}
      {open && (
        <div className="fixed inset-0 z-40 backdrop-blur-md bg-black/30 transition-opacity" />
      )}

      {/* Sidebar */}
      <div
      onClick={() => setOpen(false)}
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-50 h-full w-52 p-4 transition-transform duration-150  ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-6">
          <button onClick={() => setOpen(false)}>
            <CloseOutline height="24px" width="24px" color="#fff" />
          </button>
        </div>

            <nav className="fixed top-2/5 right-15 flex flex-col space-y-6 text-white items-center">


            <Link href="https://siddharthsharma.dev/" title="Home">
                <HomeOutline height="30px" width="30px" color="#fff" />
            </Link>
            <a
                href="https://github.com/SuperSid99"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
            >
                <LogoGithub height="30px" width="30px" color="#fff" />
            </a>
            <a
                href="https://www.linkedin.com/in/siddharthsharma99/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
            >
                <LogoLinkedin height="30px" width="30px" color="#fff" />
            </a>
            <a
                href="https://siddharthsharma.dev/Siddharth_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Resume"
            >
                <DocumentOutline height="30px" width="30px" color="#fff" />
            </a>
            {/* <a href="mailto:siddharth22sharma@gmail.com" title="Email">
                <MailOutline height="30px" width="30px" color="#fff" />
            </a> */}
            </nav>
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

export default StickySidebar;
