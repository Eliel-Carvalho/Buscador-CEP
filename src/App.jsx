import react from 'react'
import './app.css'

import { FiSearch } from 'react-icons/fi'

function App() {

  return (
    <div className="Conteiner">
      <h1 className="Title">Buscador Cep</h1>
      <div className="ConteinerInput">
        <input type="text"
        placeholder='Digite seu CEP...'/>
        <button className='buttonSearch'><FiSearch size={25} color='#FFF'/></button>
      </div>
      <main className="main">
        <h2>cep: 94779794794179</h2>

        <span>Rua teste</span>
        <span>commif24bnyf23i</span>
        <span>barropie3nqbi</span>
        <span>campo gramde</span>
      </main>
      
    </div>
  )
}

export default App
