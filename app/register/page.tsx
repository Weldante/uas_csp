"use client";
import { useSearchParams } from "next/navigation";
import { register } from "../auth/action";

export default function RegisterPage() {
  // const searchParams = useSearchParams();
  // const errorMessage = searchParams.get("error");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Aplikasi Portal Karyawan
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              formAction={register}
              className="cursor-pointer flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Register
            </button>
            {/* <div className="text-red-500 ">{errorMessage ? errorMessage : ""}</div> */}
          </div>
        </form>
      </div>
    </div>
  );
}
