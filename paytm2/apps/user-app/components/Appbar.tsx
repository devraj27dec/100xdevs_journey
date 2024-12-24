"use client";
import React from "react";

interface AppbarProps {
  user?: {
    name?: string | null
  },
  onSignIn: () => void,
  onSignOut: () => void,
}

export default function Appbar({user , onSignIn , onSignOut} : AppbarProps) {
  return (
    <div className="flex justify-between w-full mx-auto h-14 border-b shadow-sm ">
      <div className="text-2xl font-bold p-4">Payzone</div>
      <div className="flex justify-center">
      <button className="rounded-sm bg-green-600 text-white p-2" onClick={user?.name ? onSignOut : onSignIn}>
        {user ? "SignIn" : "signout"}
      </button>
      </div>
    </div>
  );
}
