import { connect } from "@/utils/server";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  await connect();
  const { name, email, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse("User created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Failed to connect to the database", {
      status: 500,
    });
  }
};
