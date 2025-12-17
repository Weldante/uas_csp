import { createClient } from "@/utils/supabase/server";

import { redirect } from "next/navigation";
import { logout } from "../auth/action";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  // Fetch data announcements

  const { data: notes } = await supabase.from("announcements").select();
  console.log(notes);

  return (
    <div className="">
      <div className="w-screen p-4 flex bg-blue-500 justify-between content-center">
        <div className="font-bold text-white">Aplikasi Portal Karyawan</div>
        <button className="rounded p-2 bg-red-500 cursor-pointer" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="p-8">
        <h1 className="font-bold text-2xl">Welcome, {user.email}</h1>
        <div className="mt-4">Announcements:</div>
        <div className="flex flex-col gap-4">
          {notes?.map((note, key) => {
            return (
              <div key={key} className="flex flex-col rounded shadow p-4">
                <div className="font-bold">{note["title"]}</div>
                <div>{note["content"]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
