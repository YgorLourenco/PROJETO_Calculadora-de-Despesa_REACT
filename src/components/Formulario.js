import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCriarGasto}) => {

    const [nome, guardarNome] = useState('')
    const [quantidade, guardarQuantidade] = useState(0)
    const [error, guardarError] = useState(0)

    // Quando o usuário agrega um gasto
    const agregarGasto = e => {
        e.preventDefault()

        // Validar
        if (quantidade < 1 || isNaN(quantidade) || nome.trim() === '') {
            guardarError(true)
        }
        guardarError(false)
        // Construir o gasto
        const gasto = {
            nome,
            quantidade,
            id: shortid.generate()
        }
        //console.log(gasto)

        // Passar o gasto ao componente principal
        guardarGasto(gasto)
        guardarCriarGasto(true)

        // Resetar o formulário
        guardarNome('')
        guardarQuantidade(0)
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregue seus gastos aqui</h2>

            {error 
            ? <Error mensagem="Ambos os campos são obrigatórios, a despesa esta incorreta" />
            : null}

            <div className='campo'>
                <label>Nome do Gasto</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Exemplo: Transporte'
                    value={nome}
                    onChange={e => guardarNome(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label>Quantidade de Gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Exemplo: 300'
                    value={quantidade}
                    onChange={e => guardarQuantidade(parseInt(e.target.value, 10))} // O 10 faz com que não tenha casas decimais
                />
            </div>

            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />

        </form>
     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCriarGasto: PropTypes.func.isRequired
}
 
export default Formulario;
