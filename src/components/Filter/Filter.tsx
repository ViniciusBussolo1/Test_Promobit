'use client'

import api from '@/services/api'
import { useQuery } from '@tanstack/react-query'

interface itemsList {
  id: number
  name: string
}

export function Filter() {
  const handleListGenres = async () => {
    const { data } = await api.get('/genre/movie/list?language=pt-BR')

    return data.genres
  }

  const { data } = useQuery({
    queryKey: ['genres'],
    queryFn: handleListGenres,
  })

  return (
    <div className="h-[28.063rem] w-full bg-purple-800 flex justify-center items-center">
      <div className="max-w-[64.563rem] w-full flex flex-col justify-center items-center gap-10">
        <h1 className="max-w-[48.813rem] w-full text-5xl leading-[3.5rem] text-white font-bold tracking-[-0.015rem] text-center">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <span className="text-sm font-bold text-white">FILTRE POR:</span>
          <div className="w-full flex flex-wrap items-center justify-center gap-3 rounded">
            {data?.map((item: itemsList) => {
              return (
                <div
                  key={item.id}
                  className="px-4 py-2 text-base text-center font-bold text-gray-700 bg-gray-0 rounded cursor-pointer hover:bg-gray-300"
                >
                  {item.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
