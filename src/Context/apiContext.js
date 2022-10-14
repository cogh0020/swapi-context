import React, {useContext, createContext, useState, useEffect} from 'react'

const APIContext = createContext()

function APIContextProvider(props){
  const [films, setFilms] = useState()

  useEffect(()=>{
    fetch(`https://swapi.dev/api/films`)
    .then(res => res.json())
    .then(data =>{
      setFilms(data.results)
      console.log(data.results)
    })
    .catch(err => console.log(err))
  }, [])

  return(
    <APIContext.Provider value={[films]} {...props} />
  )
}

function useAPI(){
  const context = useContext(APIContext)

  if (!context) throw new Error('Issue with provider')
  return context
}

export {APIContextProvider, useAPI}