import React, { useState, useRef } from 'react'
import Pantalla from '../Pantalla/Pantalla'
import Botones from '../Botones/Botones'

const operate = (operation) => {
  switch (operation[1]) {
  case '+':
    return parseFloat(operation[0]) + parseFloat(operation[2])
  case '-':
    return parseFloat(operation[0]) - parseFloat(operation[2])
  case 'x':
    return parseFloat(operation[0]) * parseFloat(operation[2])
  case '%':
    return parseFloat(operation[0]) % parseFloat(operation[2])
  default:
    return parseFloat(operation[0]) / parseFloat(operation[2])
  }
}

const verify = (result) => {
  const prueba = result.toString()
  if (prueba.length > 9) {
    if (prueba.includes('.')) {
      const res = prueba.substring(0, 9)
      if (res.indexOf('.') >= 1 && res.indexOf('.') < res.length) return res

      return 'Error'
    }
    return 'Error'
  }
  return result
}

const Calculadora = () => {
  const [pantalla, setPantalla] = useState('0')
  const operands = useRef([])
  const operator = useRef(false)
  const isResult = useRef(false)
  const change = (value) => {
    if ('0123456789.'.includes(value)) {
      if (pantalla === '0' || operator.current || pantalla === 'Error' || pantalla === 'NaN' || pantalla === 'Infinity') setPantalla(value.toString())
      else if ((pantalla + value).length <= 9) {
        setPantalla(pantalla + value)
      }
      if (isResult.current === true) {
        operands.current = []
        setPantalla(value.toString())
      }
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
            isResult.current = true
          } else {
            isResult.current = false
            operator.current = true
            operands.current = [verified, value]
          }
          setPantalla(verified.toString())
        } else {
          operands.current = []
          setPantalla(verified.toString())
        }
      } else {
        operands.current.push(value)
        operator.current = true
        isResult.current = false
      }
    } else if (value === '+/-') {
      console.log(pantalla.toString().length)
      if (pantalla.toString().length <= 8) {
        const newValue = parseFloat(pantalla) * -1
        setPantalla(newValue.toString())
      }
    }
  }
  return (
    <div className="container-calcu">
      <Pantalla data={pantalla} />
      <Botones change={change} />
    </div>
  )
}

export default Calculadora
