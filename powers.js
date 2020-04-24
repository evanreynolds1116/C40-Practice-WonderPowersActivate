// ACTIVATE FLIGHT
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

function flightHandlerFunction () {
  document.getElementById("flight").classList.remove("disabled")
  document.getElementById("flight").classList.add("enabled")
}

// ACTIVATE MIND READING
document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction)

function mindHandlerFunction () {
  document.getElementById("mindreading").classList.remove("disabled")
  document.getElementById("mindreading").classList.add("enabled")
}

// ACTIVATE XRAY
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

function xrayHandlerFunction () {
  document.getElementById("xray").classList.remove("disabled")
  document.getElementById("xray").classList.add("enabled")
}

// ENABLE ALL
let sectionEnableAll = document.querySelectorAll(".power");
for (let i = 0; i < sectionEnableAll.length; i++) {
  document.querySelector("#activate-all").addEventListener("click", () => {
    sectionEnableAll[i].classList.remove("disabled")
    sectionEnableAll[i].classList.add("enabled")
  });
}

// DISABLE ALL
let sectionDisableAll = document.querySelectorAll(".power");
for (let i = 0; i < sectionDisableAll.length; i++) {
  document.querySelector("#deactivate-all").addEventListener("click", () => {
    sectionDisableAll[i].classList.remove("enabled")
    sectionDisableAll[i].classList.add("disabled")
  });
}
