// convert function
const convertNumber = () => {
  displayOrHide('hidden-div', 'd-none', 'd-block')
  const inputNumber = document.getElementById('inputNumber')
  const convertFrom = document.getElementById('convertFrom')
  const convertTo = document.getElementById('convertTo')
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
    const binaryNumber = Number(number).toString(2)
    return Number(binaryNumber)
  } else if (from === 'Binary' && to === 'Decimal') {
    const decimalNumber = parseInt(number, 2)
    return decimalNumber
  }
}

// display result function
const displayResult = (result) => {
  const resultDiv = document.getElementById('result')
  resultDiv.textContent = ''
  let div = document.createElement('div')
  div.classList.add('input-group')
  div.classList.add('mb-3')
  div.innerHTML = `
                <textarea
                class="form-control text-center"
                name=""
                id=""
                cols="10"
                placeholder="Result Here"
                rows="5"
                aria-describedby="basic-addon1"
              > ${result} </textarea>

              <span class="input-group-text px-4" id="basic-addon1">2</span>
  
  `

  resultDiv.appendChild(div)
}

// display or hidden function
const displayOrHide = (id, className, existName) => {
  const element = document.getElementById(id)
  element.classList.add(className)
  existName && element.classList.remove(existName)
}
