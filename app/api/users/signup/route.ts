import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { Document } from "mongoose";

//initial connection with the DB
connect();
export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    //Checking if the user exists in the database
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //Hashing the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser: Document = new User({
      username,
      email,
      password: hashedPassword,
    });

    //storing on a variable, just in case for debugging on server
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", success: true },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
