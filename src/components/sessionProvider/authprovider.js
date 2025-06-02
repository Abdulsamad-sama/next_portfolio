// This component wraps the children with the SessionProvider from next-auth, allowing you to manage user sessions in your application.
"use client";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
