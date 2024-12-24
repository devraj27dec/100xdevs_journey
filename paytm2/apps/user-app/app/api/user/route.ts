import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      return NextResponse.json({
        user: session.user,
        msg: "loggedIn successfully!",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      msg: "User Unauthorized!",
    });
  }
}
