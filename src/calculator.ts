import { useState } from 'react'

export default function useCalculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState<number | null>(null)

  function calculate(operation: string) {
    const a = Number(num1)
    const b = Number(num2)
    let res: number = 0

    if (operation === 'add') res = a + b
    else if (operation === 'sub') res = a - b
    else if (operation === 'mul') res = a * b
    else if (operation === 'div') res = a / b
    else if (operation === 'pow') {
        for (let i = 1; i <= b; i++) {
            if (i === 1) res = a;
            else {
                res *= a;
            }
        }
    }

    setResult(res)
  }

  function clear() {
    setNum1('')
    setNum2('')
    setResult(null)
  }

  return { num1, setNum1, num2, setNum2, result, calculate, clear }
}