import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const Heropageskeleton = (props: Props) => {
  return (
    <Skeleton className=" bg-pink-200/50 h-screen bg-no-repeat bg-cover  flex shadow-lg items-center justify-center relative text-white px-10 xl:px-0">
      {/* <Skeleton className="absolute h-full w-full bg-no-repeat object-cover -z-10" /> */}

      <div className="w-[80%] mx-auto  relative z-20">
        <div className="flex md:w-[40%] md:justify-start">
          <div className="w-full">
            <Skeleton className="w-full h-20"></Skeleton>

            <div className="flex flex-col md:flex-row w-full  my-6 gap-x-5 ">
              <div className="md:w-[60%] flex justify-between items-center">
                <div className="flex gap-x-3">
                  <Skeleton className="h-5 w-10" />
                  <Skeleton className="h-5 w-24"></Skeleton>
                </div>

                <div className="gap-x-3 hidden ">
                  <Skeleton className="h-12 w-24"></Skeleton>
                  <Skeleton className=" h-12 w-28"></Skeleton>
                </div>
              </div>
            </div>

            <p className="flex flex-col gap-y-4 w-full">
              <Skeleton className="text-sm h-5 w-full"></Skeleton>
              <Skeleton className="text-sm h-5 w-full"></Skeleton>
              <Skeleton className="text-sm h-5 w-full"></Skeleton>
            </p>

            <Skeleton className="mt-6 flex gap-x-2 h-12 w-8/12"></Skeleton>
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default Heropageskeleton;
