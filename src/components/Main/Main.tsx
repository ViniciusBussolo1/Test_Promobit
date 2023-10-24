'use client'
import api from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { CardFilm } from './CardFilm/CardFilm'

interface filmsProps {
  id: number
  title: string
  poster_path: string
  release_date: string
}

export function Main() {
  const handleListFilms = async () => {
    const { data } = await api.get('/movie/popular?language=pt-BR&page=1')

    return data
  }

  const { data } = useQuery({
    queryKey: ['films'],
    queryFn: handleListFilms,
  })

  return (
    <main className="flex justify-center items-center pt-8">
      <div className="grid grid-cols-6 gap-8">
        {data?.map((film: filmsProps) => {
          return (
            <CardFilm
              key={film.id}
              image={film.poster_path}
              title={film.title}
              date={film.release_date}
            />
          )
        })}
      </div>
    </main>
  )
}
