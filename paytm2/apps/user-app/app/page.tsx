
import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient()

export default function Home() {
  return (
    <div className="flex justify-center bg-red-800 text-yellow-200">
      Welcome to paytm app
    </div>
  );
}