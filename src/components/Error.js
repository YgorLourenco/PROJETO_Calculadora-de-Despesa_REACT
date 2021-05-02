import React from 'react'
import PropTypes from 'prop-types'

const Error = ({mensagem}) => (
    <p className='alert alert-danger error'>{mensagem}</p>
)

Error.propTypes = {
    mensagem: PropTypes.string.isRequired
}
 
export default Error;