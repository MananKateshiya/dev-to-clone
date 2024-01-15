// pages/enter.js
import SignInForm from "@/components/forms/SignInForm";
import Link from "next/link";
import { Suspense } from "react";

function page() {
  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">{"Login"}</h2>
        <Suspense>
          <SignInForm />
        </Suspense>
        <p className="mt-4 text-gray-600">
          {"Don't have an account?"}{" "}
          <Link href={"/enter/signup"} className="text-blue-500">
            {"Sign Up"}
          </Link>
        </p>
      </div>
    </div>
    
  );
}

export default page;
