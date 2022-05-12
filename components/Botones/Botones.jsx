import React from 'react'
import PropTypes from 'prop-types'
import SpecialButton from '../SpecialButton/SpecialButton'
import Boton from '../Boton/Boton'

const Botones = ({ change }) => {
  const botones = [
    { text: 'AC', color: '#a5a5a5', textColor: 'black' },
    { text: '+/-', color: '#a5a5a5', textColor: 'black' },
    { text: '%', color: '#a5a5a5', textColor: 'black' },
    { text: '/', color: '#fe9e09', textColor: 'white' },
    { text: '7', color: '#333333', textColor: 'white' },
    { text: '8', color: '#333333', textColor: 'white' },
    { text: '9', color: '#333333', textColor: 'white' },
    { text: 'x', color: '#fe9e09', textColor: 'white' },
    { text: '4', color: '#333333', textColor: 'white' },
    { text: '5', color: '#333333', textColor: 'white' },
    { text: '6', color: '#333333', textColor: 'white' },
    { text: '-', color: '#fe9e09', textColor: 'white' },
    { text: '1', color: '#333333', textColor: 'white' },
    { text: '2', color: '#333333', textColor: 'white' },
    { text: '3', color: '#333333', textColor: 'white' },
    { text: '+', color: '#fe9e09', textColor: 'white' },
  ]

  const least = [
    { text: '.', color: '#333333', textColor: 'white' },
    { text: '=', color: '#fe9e09', textColor: 'white' },
  ]

  return (
    <div className="botones">
      {botones.map((e, i) => <Boton key={i} element={e} change={change} />)}
      <SpecialButton change={change} />
      {
        least.map((e, i) => <Boton key={i + 15} element={e} change={change} />)
      }
    </div>
  )
}

Botones.propTypes = {
  change: PropTypes.func.isRequired,
}

export default Botones
