// pages/enter.js
import SignUpForm from "@/components/forms/SignUpForm";
import Link from "next/link";
import { Suspense } from "react";

function page() {
  return (

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">{"Create Account"}</h2>
          <Suspense>
            <SignUpForm />
          </Suspense>
          <p className="mt-4 text-gray-600">
            {"Already have an account?"}{" "}
            <Link href={"/enter/signin"} className="text-blue-500">
              {"Sign In"}
            </Link>
          </p>
        </div>
      </div>
    
  );
}

export default page;
