import Image from 'next/image'
import Logo from '../../../public/Logo.svg'

export function Header() {
  return (
    <header className="w-full h-[3.5rem] bg-purple-700 flex items-center pl-28">
      <Image src={Logo} alt="Image Logo" />
    </header>
  )
}
