import Image from "next/image";
import { ExternalLinkButton } from "./_components/ExternalLinkButton";
import profilePic from '../../public/images/me.jpg'


export default function Home() {
  return (
    <main className="flex flex-col bg-[#020c1b] w-screen	h-screen items-center	justify-center">

      <Image
        src={profilePic}
        width={275}
        height={275}
        alt="Avatar"
        className="rounded-full border-2 border-[#C0C0C0]"
      />

      <div className="mt-6 flex flex-col items-center justify-center gap-3">
        <strong className="text-[#FFFFFF] text-2xl sm:text-4xl">Eduardo Gomes</strong>
        <span className="text-[#B0B0B0] text-xl sm:text-2xl" >Full Stack Software Developer</span>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-3">
        <ExternalLinkButton text="Linkedin" link="https://www.linkedin.com/in/eduardogomesf/" />
        <ExternalLinkButton text="Github" link="https://github.com/eduardogomesf" />
        <ExternalLinkButton text="Stackoverflow" link="https://stackoverflow.com/users/11420127/eduardo" />
      </div>
    </main>
  )
}
