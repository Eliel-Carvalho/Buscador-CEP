import react, { useState } from 'react'
import './app.css'
import api from './services/api'

import { FiSearch } from 'react-icons/fi'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSeach() {
    if(input === '') {
      alert('Preencha com CEP valido')
      return //para parar a execução do nosso codigo
    }

    try{
      const respose = await api.get(`${input}/json`)
    setCep(respose.data)
    setInput('')
    }catch{
      alert('ERROR')
      setInput('')
    }
  }

  return (
    <div className="Conteiner">
      <h1 className="Title">Buscador Cep</h1>
      <div className="ConteinerInput">
        <input type="text"
        placeholder='Digite seu CEP...'
        value={input}
        onChange={(e)=> setInput(e.target.value)}/>
        
        <button className='buttonSearch' onClick={handleSeach}><FiSearch size={25} color='#FFF'/></button>
      </div>

      {Object.keys(cep).length > 0 && (

        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}-{cep.uf}</span>
        </main>
      )}
      
    </div>
  )
}

export default App
