import style from './Lista.module.scss';
import Item from './Item';
import { log } from 'console';
import { useState } from 'react';
function Lista() {

  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }, {
    tarefa: "Typescript",
    tempo: "03:00:00"
  }]);
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, { tarefa: "estudar estado", tempo: "05:00:00" }])
      }}> Estudos do dia </h2>
      <ul >
        {tarefas.map((item, index) => (
          <Item
            key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}
          />
        ))}
      </ul>
    </aside >
  )
}

export default Lista;