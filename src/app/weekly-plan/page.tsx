
"use client";

import Header from "@/components/header";
import Image from "next/image";

export default function WeeklyPlanPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Header
        title="Weekly Meal Plan"
        description="This is a placeholder for a weekly view."
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="relative w-full mx-auto aspect-[4/3] max-w-5xl rounded-2xl overflow-hidden shadow-2xl group">
          <div className="grid grid-cols-3 grid-rows-2 h-full">
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src="https://placehold.co/400x300.png"
                alt="Egg muffins"
                data-ai-hint="egg muffins"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src="https://placehold.co/400x300.png"
                alt="Zucchini noodle salad"
                data-ai-hint="zucchini salad"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src="https://placehold.co/400x300.png"
                alt="Avocado toast"
                data-ai-hint="avocado toast"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src="https://placehold.co/400x300.png"
                alt="Beef stew"
                data-ai-hint="beef stew"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src="https://placehold.co/400x300.png"
                alt="Stuffed chicken breast"
                data-ai-hint="stuffed chicken"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src="https://placehold.co/400x300.png"
                alt="Shrimp noodles"
                data-ai-hint="shrimp noodles"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
             <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/90 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-lg">
                <p className="text-white font-light text-lg md:text-xl">Your Weekly Plan:</p>
                <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight my-2">7-day <br/> MEAL Plan</h1>
                <p className="text-white font-semibold text-base md:text-lg">View details in the Diet Plan page</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
