import React from 'react'
import {useAPI} from '../Context/apiContext'
import {NavLink} from 'react-router-dom'

function FilmList(){
  const [films] = useAPI()

  if (!films) {return (<p>Still fetching...</p>)} else{

    return(
      <div>
        <h2>Film Titles</h2>
        {films.map(film=>(
          <NavLink to={"/" + film.episode_id} key={film.episode_id}>
            {film.title}
          </NavLink>
        ))}
      </div>
    )
  }
}

export default FilmList