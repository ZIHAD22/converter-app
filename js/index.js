// global Number
const inputNumber = document.getElementById('inputNumber')
const convertFrom = document.getElementById('convertFrom')
const convertTo = document.getElementById('convertTo')

// convert function
const convertNumber = () => {
  displayOrHide('hidden-div', 'd-none', 'd-block')

  const fromValue = convertFrom.options[convertFrom.selectedIndex].value
  const toValue = convertTo.options[convertTo.selectedIndex].value
  const inputNumberValue = inputNumber.value

  const result = decimalToBinary(fromValue, toValue, inputNumberValue)
  displayResult(result)
  displayOrHide('hidden-div', 'd-block', 'd-none')
}

// converting function
const decimalToBinary = (from, to, number) => {
  if (from === 'Decimal' && to === 'Binary') {
    const convertingNumber = Number(Number(number).toString(2))
    const numberObj = {
      convertingNumber,
      base: 2,
    }
    return numberObj
  } else if (from === 'Binary' && to === 'Decimal') {
    const convertingNumber = parseInt(number, 2)
    const numberObj = {
      convertingNumber,
      base: 10,
    }
    return numberObj
  }
}

// display result function
const displayResult = (result) => {
  const { convertingNumber, base } = result
  console.log(result)
  const resultDiv = document.getElementById('result')
  resultDiv.textContent = ''
  let div = document.createElement('div')
  div.classList.add('input-group')
  div.classList.add('mb-3')
  div.innerHTML = `
                <textarea
                class="form-control text-center py-4"
                name=""
                id=""
                placeholder="Result Here"
                rows="1"
                disabled
                aria-describedby="basic-addon1"
              > ${convertingNumber} </textarea>

              <span class="input-group-text px-4" id="basic-addon1">${base}</span>
  
  `

  resultDiv.appendChild(div)
}

// display or hidden function
const displayOrHide = (id, className, existName) => {
  const element = document.getElementById(id)
  element.classList.add(className)
  existName && element.classList.remove(existName)
}

// reset All Number
const resetAllNumber = () => {
  inputNumber.value = ''
  displayOrHide('hidden-div', 'd-none', 'd-block')
}
