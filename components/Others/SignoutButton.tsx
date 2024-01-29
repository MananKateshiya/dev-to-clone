"use client";
import { useRouter } from "next/navigation";
import React from "react";

function SignoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/users/logout");
    if (res.ok) {
    router.push('/enter')
    }
  };

  return (
    <div>
      <button onClick={handleLogout} className="text-start group-hover:underline w-full">
        Sign Out
      </button>
    </div>
  );
}

export default SignoutButton;
