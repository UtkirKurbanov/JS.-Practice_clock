const sec = document.querySelector(".s"),
  min = document.querySelector(".m"),
  hour = document.querySelector(".h"),
  hoursNumber = document.querySelector(".hours"),
  minutesNumber = document.querySelector(".minutes");

function clock() {
  let time = new Date();
  let second = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;

  sec.style = `transform: rotate(${second}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  hour.style = `transform: rotate(${hours}deg)`;

  hoursNumber.innerHTML = time.getHours();
  minutesNumber.innerHTML = time.getMinutes();

  setTimeout(() => clock(), Infinity);
}

clock();

const link = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");

console.log(link);

for (let i = 0; i < link.length; i++) {
  console.log(link[i]);

  link[i].addEventListener("click", function (e) {
    e.preventDefault();
    // add = addEventListener
    //remove = preventDefault

    for (let t = 0; t < link.length; t++) {
      link[t].classList.remove("active");
      tabs[t].classList.remove("active");
    }

    //this
    tabsNew(this, tabs[i]);
  });
}

function tabsNew(link, tabs) {
  link.classList.add("active");
  tabs.classList.add("active");
}

const watchBtn = document.querySelector(".stopwatch__btn"),
  secondsWatch = document.querySelector(".stopwatch__seconds"),
  minutesWatch = document.querySelector("stopwatch__minutes"),
  hoursWatch = document.querySelector(".stopwatch__hours"),
  secondInfo = document.querySelector(".tabsLink__span");

watchBtn.addEventListener("click", function () {
  if (this.innerHTML == "start") {
    this.innerHTML = "stop";
    secondInfo.classList.add("active");

    let i = 0;
    setTimeout(() => stopWatch(this, i), 1000);
  } else if (this.innerHTML == "stop") {
    secondInfo.classList.remove("active");
    secondInfo.classList.add("active_clear");
    this.innerHTML = "clear";
  } else {
    secondInfo.classList.remove("active_clear");
    secondsWatch.innerHTML = 0;
    minutesWatch.innerHTML = 0;
    hoursWatch.innerHTML = 0;
    this.innerHTML = "start";
  }
});

function stopWatch(el, i) {
  if (el.innerHTML == "stop") {
    if (i == 60) {
      i = 0;
      secondsWatch.innerHTML = i;
      if (minutesWatch.innerHTML == 59) {
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML++;
      } else {
        minutesWatch.innerHTML++;
      }
    } else {
      i++;
      secondsWatch.innerHTML = i;
    }
    setTimeout(() => stopWatch(el, i), 1000);
  }
}
