let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let input = document.querySelector("#number");
let progressValue = 0;
let speed = 50;
let progressEndValue = 100;

function percentChange() {}

let progress = setInterval(() => {
  progressEndValue = input.value;
  if (progressEndValue > 100 || progressEndValue < 0) {
    progressEndValue = 0;
  }
  progressValue++;
  // valueContainer.textContent = `${progressValue}%`;
  if (progressEndValue == 0) {
    valueContainer.textContent = `0%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${0 * 3.6}deg,
      #cadcff ${0 * 3.6}deg
  )`;
    clearInterval(progress);
    progressValue = 0;
  } else if (progressEndValue <= 10 && progressEndValue > 0) {
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(

      #fc1303 ${progressValue * 3.6}deg,
       #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressEndValue > 10 && progressEndValue <= 30) {
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(

      #fc5e03 ${progressValue * 3.6}deg,
      #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressEndValue > 30 && progressEndValue <= 60) {
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(

      #fcd703 ${progressValue * 3.6}deg,
      //  #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressEndValue > 60 && progressEndValue <= 90) {
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(

      #b6fc03 ${progressValue * 3.6}deg,
     #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressEndValue > 90 && progressEndValue <= 100) {
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(

      #189E5E ${progressValue * 3.6}deg,
       #FFA30E ${progressValue * 3.6}deg
  )`;
  }

  if (progressValue == progressEndValue) {
    clearInterval(progress);
    progressValue = 0;
  }
}, speed);
