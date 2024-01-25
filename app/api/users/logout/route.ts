import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json(
      { message: "Logout successful", success: true },
      { status: 200 }
    );
    res.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    if (res.ok) {
      return res;
    }
  } catch (error: any) {
    console.log({ error: error.message });
  }
}
