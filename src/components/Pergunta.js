import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Pergunta = ({guardarDespesa, guardarRestante, atualizarPergunta}) => {
    
    // Definir o State
    const [quantidade, guardarQuantidade] = useState(0); // [variavel, função] = começa com 0
    const [error, guardarError] = useState(false) // [variavel, função] = começa com falso

    // Função que le a despesa 
    const definirDespesa = e => {
        guardarQuantidade( parseInt(e.target.value, 10) ) // Valor de base 10
    }

    // Submit para definir a despesa
    const agregarDespesa = e => {
        e.preventDefault(); // Cancela evento se for cancelado

        // Validar
        if (quantidade < 1 || isNaN(quantidade)) { // Se for menor que 1 ou tiver nada, vai devolver um erro
            guardarError(true)
            return;
        }

        // Se passa pela validação
        guardarError(false);
        guardarDespesa(quantidade)
        guardarRestante(quantidade)
        atualizarPergunta(false)

    }
    
    return ( 
        <Fragment>
            <h2>Coloque sua despesa</h2>

            {error ? <Error mensagem='A despesa esta incorreta' /> : null }

            <form
                onSubmit={agregarDespesa}
            >
                <input 
                    type='number' // Ele le como uma string e interessante na função converter para inteiro com parseInt()
                    className='u-full-width'
                    placeholder='Coloque sua despesa'
                    onChange={definirDespesa}
                />
                <input 
                    type='submit'
                    className='button-primary u-full-width'
                    placeholder='Definir despesa'
                />
            </form>
        </Fragment>
     );
}

Pergunta.propTypes = {
    guardarDespesa: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    atualizarPergunta: PropTypes.func.isRequired
}
 
export default Pergunta;