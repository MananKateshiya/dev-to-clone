"use client";
import { useRouter } from "next/navigation";
import React from "react";

function SignoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch("/api/users/logout");
    if (res.status === 200) {
      router.push("/enter");
    }
  };
  return (
    <div>
      <button onClick={handleLogout} className="group-hover:underline">
        Sign Out
      </button>
    </div>
  );
}

export default SignoutButton;
