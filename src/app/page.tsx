import Image from 'next/image'
import Logo from '../../public/Logo.svg'

export default function Home() {
  return (
    <>
      <header className="w-full h-[3.5rem] bg-purple-700 flex items-center pl-28">
        <Image src={Logo} alt="Image Logo" />
      </header>
      <div className="h-[28.063rem] w-full bg-purple-800 flex justify-center items-center">
        <div className="max-w-[64.563rem] w-full flex flex-col justify-center items-center gap-10">
          <h1 className="max-w-[48.813rem] w-full text-5xl leading-[3.5rem] text-white font-bold tracking-[-0.015rem] text-center">
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h1>
          <div className="w-full flex justify-center">
            <span className="text-sm font-bold text-white">FILTRE POR:</span>
          </div>
        </div>
      </div>
    </>
  )
}
