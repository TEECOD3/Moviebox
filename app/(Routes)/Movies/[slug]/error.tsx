"use client"; // Error components must be Client Components
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <h2 className="text-gray-500 font-bold text-sm md:text-base">
        Something went wrong!🛠️
      </h2>

      <Button
        className="bg-pink-400 text-white"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            router.push("/");
          }
        }
      >
        Try again
      </Button>
    </div>
  );
}
