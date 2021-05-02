import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { revisarDespesa } from '../helpers'

const ControleDespesa = ({despesa, restante}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Despesa: ${despesa}
            </div>

            <div className={revisarDespesa(despesa, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
     );
}

ControleDespesa.propTypes = {
    despesa: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControleDespesa;