import React from 'react'
import PropTypes from 'prop-types'

const Boton = ({ element, change }) => (
  <div role="button" tabIndex={0} onKeyDown={() => {}} className="boton" onClick={() => change(element.text)} style={{ backgroundColor: element.color, color: element.textColor }}>{element.text}</div>
)

Boton.propTypes = {
  element: PropTypes.instanceOf(Object).isRequired,
  change: PropTypes.func.isRequired,
}

export default Boton
