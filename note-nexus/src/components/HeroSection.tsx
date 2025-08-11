import Link from "next/link"
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Embark on your musical journey with our all-inclusive courses designed for every level. From beginners to seasoned players seeking to sharpen their craft, we’ll help you discover and unleash your full musical potential.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection