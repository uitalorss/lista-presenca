import './style.css'

import { Card } from '../../components/Card'
import { useState } from 'react'

export function Home() {

  const [student, setStudent] = useState();
  const [listStudents, setListStudents] = useState([])

  function handleAddStudent(){
    const newStudent = {
      name: student,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setListStudents([...listStudents, newStudent])
  }
  
  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        placeholder="Digite o nome."
        onChange={e => {setStudent(e.target.value)}}
      />
      <button onClick={handleAddStudent}>Adicionar</button>
      
      {listStudents.map((itemStudent) => {
          return <Card name={itemStudent.name} time={itemStudent.time}/>
      })}

    </div>
  )
}