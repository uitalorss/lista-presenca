import './style.css'

import { Card } from '../../components/Card'
import { useEffect, useState } from 'react'

export function Home() {

  const [student, setStudent] = useState();
  const [listStudents, setListStudents] = useState([])
  const [user, setUser] = useState({
    name: '',
    avatar: ''
  })

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

  useEffect(() => {
    fetch('https://api.github.com/users/uitalorss')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })
      .catch(error => console.error(error))
  })  
  
  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto-do-perfil" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite o nome."
        onChange={e => {setStudent(e.target.value)}}
      />
      <button onClick={handleAddStudent}>Adicionar</button>
      
      {listStudents.map((itemStudent) => {
          return <Card key={itemStudent.time} name={itemStudent.name} time={itemStudent.time}/>
      })}

    </div>
  )
}