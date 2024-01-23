"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function ProfileModal({
  children,
  className,
}: {
  children: React.ReactElement;
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div
      className={`${className}`}
      onClick={() => setIsModalOpen((prev) => !prev)}
      ref={cardRef}
    >
      <div className="relative group hover:cursor-pointer focus:ring-0">
        {children}

        {isModalOpen && (
          <div
            className={` ${
              isModalOpen ? "block" : "hidden"
            } absolute z-10 top-full -left-16 mt-3 transform -translate-x-1/2 bg-white rounded-md shadow-md p-4 ring-0`}
          >
            <div className="flex flex-col space-y-2 justify-start items-start w-44">
              <Link href="#" className="hover:text-blue-500">
                Profile
              </Link>
              <Link href="#" className="hover:text-blue-500">
                Dashboard
              </Link>
              <Link href="/api/users/logout" className="hover:text-blue-500">
                Sign Out
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileModal;
