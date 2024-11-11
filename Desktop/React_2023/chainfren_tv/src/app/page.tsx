"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /login when the component mounts
    router.push("/login");
  }, [router]);

  return null; // Return null or a loading indicator while redirecting
}
