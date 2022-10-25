function findPath(arr, i, j) {
  if (i === arr.length) {
    return 0
  }

  let minimumSum =
    arr[i][j] + Math.min(findPath(arr, i + 1, j), findPath(arr, i + 1, j + 1))

  return minimumSum
}

function findShortestPath(array) {
  return findPath(array, 0, 0)
}

function parsePyramidString(str) {
  return str.split('\n').map((el) => el.split(' ').map((el) => Number(el)))
}

function validatePyramid(pyramid, height) {
  let isPyramidValid = true
  if (pyramid.length !== height) {
    isPyramidValid = false
    return isPyramidValid
  }

  for (let i = 0; i < height; i++) {
    if (pyramid[i].length !== i + 1) {
      isPyramidValid = false
      return isPyramidValid
    }
  }
  return isPyramidValid
}

function calculatePath() {
  const inputValue = document.getElementById('text').value
  const [[height], ...pyramid] = parsePyramidString(inputValue)
  const isPyramidValid = validatePyramid(pyramid, height)
  if (!isPyramidValid) {
    return alert('Invalid input!')
  }
  const shortestPath = findShortestPath(pyramid)
  result.textContent = shortestPath
}

const result = document.getElementById('result')
const calculateButton = document.getElementById('calculateButton')
calculateButton.addEventListener('click', calculatePath)
