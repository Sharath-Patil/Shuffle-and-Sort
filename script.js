let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    cubeWrapper = document.getElementById('cards-container');

numbers.forEach((card, index) => {
  cubeWrapper.innerHTML += '<li card-id=' + card + '>' + card + '</li>'
})

function shuffle()  {
  numbers = numbers.sort(() => { return .5 - Math.random() }); //Fisher Yates method
  cubeWrapper.innerHTML = ''
  for(let i = 0; i < numbers.length ; i++) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[i]
    cubeItem.setAttribute('card-id', numbers[i])
    cubeWrapper.appendChild(cubeItem)
  }
}

function sort() {
  numbers = numbers.sort((a, b) => { return a - b });
  cubeWrapper.innerHTML = ''
  for(let i = 0; i < numbers.length ; i++)  {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[i]
    cubeItem.setAttribute('card-id', numbers[i])
    cubeWrapper.appendChild(cubeItem)
  }
}