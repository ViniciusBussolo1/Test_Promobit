import Image from 'next/image'

interface cardFilmsProps {
  image: string
  title: string
  date: string
}

export function CardFilm({ image, title, date }: cardFilmsProps) {
  return (
    <div className="max-w-[11rem] w-full space-y-2">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt={title}
        width={0}
        height={0}
        className="w-full "
      />
      <div>
        <h4 className="text-base font-bold text-black">{title}</h4>
        <span className="text-sm leading-6 font-bold text-gray-600 uppercase">
          {date}
        </span>
      </div>
    </div>
  )
}
