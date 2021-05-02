import Pergunta from './components/Pergunta'
import React, {useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControleDespesa from './components/ControleDespesa'

function App() {

  // Definir o State
  const [despesa, guardarDespesa] = useState(0) // [variavel, função] = começa com 0
  const [restante, guardarRestante] = useState(0) // [variavel, função] = começa com 0
  const [mostrarpergunta, atualizarPergunta] = useState(true) // Vai julgar a validação e mostrar o resto do formulário
  const [gastos, guardarGastos] = useState([]) // Array de objetos
  const [gasto, guardarGasto] = useState({}) // Atualiza os gastos que são adicionados
  const [criargasto, guardarCriarGasto] = useState(false)

  // useEffect que atualiza o restante 
  useEffect(() => {
    if(criargasto){
      // Agregue a nova despesa
      guardarGastos([
        ...gastos,
        gasto
      ])

      // Restou da despesa atual
      const despesaRestante = restante - gasto.quantidade;
      guardarRestante(despesaRestante)

      // Resetar o falso
      guardarCriarGasto(false)
    }
  }, [gasto, criargasto, gastos, restante])

  // // Quando agregar um novo gasto
  // const agregarNovoGasto = gasto => {
  //     guardarGastos([
  //       ...gastos,
  //       gasto
  //     ])
  // }

  // O Ternary Operator fica por conta de criar uma condição onde cas tenha um valor de despesa, vai se abrir o resto do formulário
  return (
    <div className='container'>
      <header>

        <h1>Gasto Semanal</h1>
        <div className='conteudo-principal conteudo'> 
          {mostrarpergunta
          ? (<Pergunta 
            guardarDespesa={guardarDespesa}
            guardarRestante={guardarRestante}
            atualizarPergunta={atualizarPergunta}
            />)
          : (<div className='row'>
              <div className='one-half column'>
                <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCriarGasto={guardarCriarGasto}
                />
              </div>

              <div className='one-half column'>
                <Listado 
                  gastos={gastos}
                />
                <ControleDespesa 
                  despesa={despesa}
                  restante={restante}
                />
              </div>
              </div>)
          }
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
