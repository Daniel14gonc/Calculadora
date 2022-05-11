import { useState, useRef } from 'react'
import logo from './logo.svg'
import './App.css'

const Pantalla = ({ data }) => {
  return (
    <div className="pantalla">
      <p>{data}</p>
    </div>
  )
}

const Boton = ({ element, change }) => (
    <div className="boton" onClick={() => change(element.text)} style={{backgroundColor: element.color, color: element.textColor}}>{element.text}</div>
)

const SpecialButton = ({ change }) => (
  <div className="special-button" style={{color: 'white'}} onClick={() => change(0)}>0</div>
)

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
    <>
      <div className="botones">
        {botones.map((e) => <Boton element={e} change={change} />)}
        <SpecialButton change={change} />
        {
          least.map((e) => <Boton element={e} change={change} />)
        }
      </div>
    </>
  )
}

const operate = (operation) => {
  switch (operation[1]) {
    case '+':
      return parseInt(operation[0]) + parseInt(operation [2])
    case '-':
      return parseInt(operation[0]) - parseInt(operation [2])
    case 'x':
      return parseInt(operation[0]) * parseInt(operation [2])
    case '%':
      return parseInt(operation[0]) % parseInt(operation [2])
    default:
      return parseInt(operation[0]) / parseInt(operation [2])
  }
}

const verify = (result) => {
  const prueba = result.toString()
  if (prueba.length > 9) {
    if (prueba.includes('.')) {
      const res = prueba.substring(0, 9)
      if( res.indexOf('.') >= 1 && res.indexOf('.') < res.length ) return res

      return 'Error'
    }
    return 'Error'
  }
  return result
}

const Calculadora = () => {
  const [pantalla, setPantalla] = useState(0)
  const operands = useRef([])
  const operator = useRef(false)
  const isResult = useRef(false)
  const change = (value) => {
    if ('0123456789'.includes(value)) {
      if(pantalla == '0' || operator.current || pantalla === 'Error' || pantalla === 'NaN' || pantalla === 'Infinity') setPantalla(value)
      else {
        if((pantalla+value).length < 9)
          setPantalla(pantalla + value)
      } 

      if (isResult.current) {
        operands.current = []
      }
      setPantalla(value)
      isResult.current = false
      operator.current = false
    } else if (value === 'AC') {
      operands.current = []
      setPantalla('0')
    } else if ('+-x/=%'.includes(value)) {
      operands.current.push(pantalla)
      if (operands.current.length > 2) {
        const result = operate(operands.current)
        const verified = verify(result)
        if (verified !== 'Error') {
          if (value === '=') {
            operands.current = []
          } else {
            operands.current = [verified, value]
          }
          setPantalla(verified)
        } else {
          operands.current = []
          setPantalla(verified)
        }
      } else {
        if (operands.current.length < 1) operands.current.push(pantalla)
        operands.current.push(value)
        operator.current = true
      } 
        
    } else if (value === '+/-') {
      const newValue = parseInt(pantalla) * -1
      setPantalla(newValue.toString())
    }
  }
  return (
    <div className="container-calcu">
      <Pantalla data={pantalla} />
      <Botones change={change} />
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Calculadora />
    </div>
  )
}

export default App
