import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Meteors from '@/components/ui/meteors';
import BoxReveal from '@/components/ui/box-reveal';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white max-h-[100vh] overflow-hidden">
      <Meteors number={30} />
      {/* Centering the content */}
      <div className="flex flex-col items-center justify-center size-full max-w-lg pt-8">
        <BoxReveal boxColor={"#5046e6"} duration={1}>
          <h1 className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]">
          PromptVision
          </h1>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={1}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Query and Image Generator
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={1}>
          <div className="mt-6">
            <p>
              built with
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Next JS</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
              <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={1}>
          <Link href="/login">
            <Button className="mt-[1.6rem] bg-[#5046e6]">Get Started</Button>
          </Link>
        </BoxReveal>
      </div>
    </div>
  );
}
