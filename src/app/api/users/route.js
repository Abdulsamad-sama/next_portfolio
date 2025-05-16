import User from "@/models/user";
import { connect } from "@/utils/server";

export const GET = async (request) => {
  try {
    await connect();
    const user = await User.find();
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response("failed", { status: 500 });
  }
};
