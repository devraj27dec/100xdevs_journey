"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Appbar from "../components/Appbar";
export default function Home() {

  const session = useSession()

  return (
    <div>
      <Appbar onSignIn={signIn} onSignOut={signOut} user={session.data?.user}/>
    </div>
  );
}
