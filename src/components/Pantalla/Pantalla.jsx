import React from 'react'
import PropTypes from 'prop-types'

const Pantalla = ({ data }) => (
  <div className="pantalla">
    <p>{data}</p>
  </div>
)

Pantalla.propTypes = {
  data: PropTypes.string.isRequired,
}

export default Pantalla
