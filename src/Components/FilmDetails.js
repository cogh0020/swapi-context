import React from 'react'
import {useAPI} from '../Context/apiContext'
import {useParams} from 'react-router-dom'

function FilmDetails(){
  const [films] = useAPI()
  const {id} = useParams()
  let film

  if(films) {
    film = films.find(item=> item.episode_id ===  parseInt(id))

  } else {
    return null
  }

  return(
    <>
    <h2>{film.title}</h2>
    <pre>{JSON.stringify(film, null, 2)}</pre>
    </>
  )
}

export default FilmDetails