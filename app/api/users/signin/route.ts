import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// initial connection witht the DB
connect();

export async function POST(request: NextRequest) {
  try {
    //GET data from the client
    const { email, password } = await request.json();
    const userObject = await User.findOne({ email });

    
    //check if the user exist
    if (!userObject) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }
    //check for the correct password
    const validPassword = await bcryptjs.compare(password, userObject.password);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    }
    //get the token data
    const tokenData = {
      id: userObject._id,
      username: userObject.username,
      email: userObject.email,
    };

    //create a token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      {
        message: "Login Successful!",
        success: true,
      },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true });
    
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
