// This is a Next.js API route that handles GET requests to fetch a specific post by its ID from the database.

// It connects to the database, retrieves all posts, and returns them as a JSON response.

import { connect } from "@/utils/server";
import { NextResponse } from "next/server";
import Post from "@/models/post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();

    const posts = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("failed", { status: 500 });
  }
};
