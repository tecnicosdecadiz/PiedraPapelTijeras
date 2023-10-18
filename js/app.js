var playerPointsElement = document.getElementById('playerPoints');
var playerPointsValue = parseInt(playerPointsElement.innerText);

var robotPointsElement = document.getElementById('robotPoints');
var robotPointsValue = parseInt(robotPointsElement.innerText);

function changeImgPlayer() {
  var inputPlayer = document.getElementById('playerSelection').value;
  var img = changeImg(inputPlayer);

  console.log(img);
  imgPlayer.src = img;
}

function play() {
  var inputPlayer = document.getElementById('playerSelection').value;

  var arrayRobot = ['paper', 'rock', 'scissors'];

  var robotDecision = arrayRobot[Math.floor(Math.random() * arrayRobot.length)];

  var img = changeImg(robotDecision);
  imgRobot.src = img;

  if(inputPlayer === 'paper' && robotDecision === 'rock'){
     result.innerHTML = 'Ganaste';
     playerPointsValue++;
     playerPointsElement.innerText = playerPointsValue;
  }else if (inputPlayer === 'paper' && robotDecision === 'scissors'){
    result.innerHTML = 'Gana el Robot';
    robotPointsValue++;
    robotPointsElement.innerText = robotPointsValue;
  }else if (inputPlayer === 'rock' && robotDecision === 'paper'){
    result.innerHTML = 'Gana el Robot';
    robotPointsValue++;
    robotPointsElement.innerText = robotPointsValue;
  }else if (inputPlayer === 'rock' && robotDecision === 'scissors'){
    result.innerHTML = 'Ganaste';
    playerPointsValue++;
    playerPointsElement.innerText = playerPointsValue;
  }else if (inputPlayer === 'scissors' && robotDecision === 'paper'){
    result.innerHTML = 'Ganaste';
    playerPointsValue++;
    playerPointsElement.innerText = playerPointsValue;
  }else if (inputPlayer === 'scissors' && robotDecision === 'rock'){
    result.innerHTML = 'Gana el Robot';
    robotPointsValue++;
    robotPointsElement.innerText = robotPointsValue;
  }else{
    result.innerHTML = 'Empate';
  }

  if(playerPointsValue === 3 || robotPointsValue === 3){
    playButton.style.display = 'none';
    restart.style.display = 'block';
    
    if(playerPointsValue === 3){
      result.innerHTML = 'Fin de partida, Ganaste';
      window.open(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1',
        '_blank'
      );
    }else{
      result.innerHTML = 'Fin de partida, Perdiste';
    }
  }
}

function changeImg(input) {
  if (input === 'rock') {
    var img = '../img/piedra.png';
  }else if(input === 'paper') {
    var img = '../img/papel.png';
  }else if(input === 'scissors') {
    var img = '../img/tijeras.png';
  }
  return img;
}
