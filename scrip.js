let baseColor = "yellow";
let passwordIndex = 0;
const keys = Array.from(Array(10).keys());

const model = [
  { colour: "red", inner: 1, outer: 2 },
  { colour: "green", inner: 3, outer: 4 },
  { colour: "blue", inner: 5, outer: 6 },
  { colour: "yellow", inner: 7, outer: 8 },
  { colour: "pink", inner: 9, outer: 10 },
];

const outerCircle = document.getElementById("outer-circle");
// LIST OF COLOURS
const list = ["1", "2", "3", "4", "5"].map((el) =>
  document.getElementsByClassName(el)
);
const num = [
  "num-1",
  "num-2",
  "num-3",
  "num-4",
  "num-5",
  "num-6",
  "num-7",
  "num-8",
  "num-9",
  "num-10",
].map((el) => document.getElementsByClassName(el));

// SET COLOR

const setColor = (colour, li) => {
  Array.prototype.forEach.call(li, (child) => {
    child.style.background = colour;
    // console.log(child.style.background);
  });
};
const setNumber = (number, li) => {
  Array.prototype.forEach.call(li, (child) => {
    child.innerHTML = number;
  });
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const getRandom = (key) => {
  let keysRemove = key;
  console.log(keysRemove);
  let index = Math.floor(getRandomArbitrary(0, keysRemove.length + 1));
  let value = keysRemove[index];
  while (value == undefined) {
    index = Math.floor(getRandomArbitrary(0, keysRemove.length + 1));
    value = keysRemove[index];
  }
  keysRemove = keysRemove.filter((_, ind) => ind != index);
  return { keysRemove, value };
};
const setRandom = () => {
  let key = keys;

  // SET 10 NUMBER
  for (let index = 0; index < 10; index++) {
    let data = getRandom(key);
    let value = data.value;
    key = data.keysRemove;

    switch (index) {
      case 0:
        model[0].inner = value;
        break;
      case 1:
        model[0].outer = value;
        break;
      case 2:
        model[1].inner = value;
        break;
      case 3:
        model[1].outer = value;
        break;
      case 4:
        model[2].inner = value;
        break;
      case 5:
        model[2].outer = value;
        break;
      case 6:
        model[3].inner = value;
        break;
      case 7:
        model[3].outer = value;
        break;
      case 8:
        model[4].inner = value;
        break;
      case 9:
        model[4].outer = value;
        break;

      default:
        break;
    }
  }
};
setRandom();
const UI = () => {
  model.forEach((el, index) => {
    // console.log({ el }, index, index + 1);
    setColor(el.colour, list[index]);
    setColor(el.colour, list[index]);
    // console.log("setnumber", 2 * index + 1);
    try {
      setNumber(el.outer, num[2 * index]);
      setNumber(el.inner, num[2 * index + 1]);
    } catch (error) {
      console.log(error);
    }
  });
};

// SET UI
const rotate = () => {
  console.log(outerCircle);
};
UI();

// ROTATE
let deg = 0;

function left() {
  let temp = model[0].colour;
  model[0].colour = model[1].colour;
  model[1].colour = model[2].colour;
  model[2].colour = model[3].colour;
  model[3].colour = model[4].colour;
  model[4].colour = temp;
  UI();
}

function right() {
  let temp = model[4].colour;
  model[4].colour = model[3].colour;
  model[3].colour = model[2].colour;
  model[2].colour = model[1].colour;
  model[1].colour = model[0].colour;
  model[0].colour = temp;
  UI();
}

function getInner() {
  const value = model.find((el) => el.colour == baseColor);
  if (passwordIndex == 0) {
    document.getElementById("opt-1").value = value.inner;
  } else if (passwordIndex == 1) {
    document.getElementById("opt-2").value = value.inner;
  } else if (passwordIndex == 2) {
    document.getElementById("opt-3").value = value.inner;
  } else if (passwordIndex == 3) {
    document.getElementById("opt-4").value = value.inner;
  }
  passwordIndex += 1;
}

function getOuter() {
  const value = model.find((el) => el.colour == baseColor);
  if (passwordIndex == 0) {
    document.getElementById("opt-1").value = value.outer;
  } else if (passwordIndex == 1) {
    document.getElementById("opt-2").value = value.outer;
  } else if (passwordIndex == 2) {
    document.getElementById("opt-3").value = value.outer;
  } else if (passwordIndex == 3) {
    document.getElementById("opt-4").value = value.outer;
  }
  passwordIndex += 1;
}

function submit() {
  const value1 = document.getElementById("opt-1").value;
  const value2 = document.getElementById("opt-2").value;
  const value3 = document.getElementById("opt-3").value;
  const value4 = document.getElementById("opt-4").value;
  const password =
    String(value1) + String(value2) + String(value3) + String(value4);
  console.log(Number(password));
  if (Number(password) === numberNumber) {
    location.href = "./success.html";
  } else {
    location.href = "./failure.html";
  }
}
// document.getElementById("spinner").style.display = "block";

// INPUT pin

console.clear();
let inputs = document.querySelectorAll("input");
let values = Array(4);
let clipData;
inputs[0].focus();

inputs.forEach((tag, index) => {
  tag.addEventListener("keyup", (event) => {
    if (event.code === "Backspace" && hasNoValue(index)) {
      if (index > 0) inputs[index - 1].focus();
    }

    //else if any input move focus to next or out
    else if (tag.value !== "") {
      index < inputs.length - 1 ? inputs[index + 1].focus() : tag.blur();
    }

    //add val to array to track prev vals
    values[index] = event.target.value;
  });

  tag.addEventListener("input", () => {
    //replace digit if already exists
    if (tag.value > 10) {
      tag.value = tag.value % 10;
    }
  });

  tag.addEventListener("paste", (event) => {
    event.preventDefault();
    clipData = event.clipboardData.getData("text/plain").split("");
    filldata(index);
  });
});

function filldata(index) {
  for (let i = index; i < inputs.length; i++) {
    inputs[i].value = clipData.shift();
  }
}

function hasNoValue(index) {
  if (values[index] || values[index] === 0) return false;

  return true;
}
const correctPassword = window.prompt("enter a number");
baseColor = Number(window.prompt("1.red\n2.green\n3.blue\n4.yellow\n5.pink"));
let numberNumber = null;
const setPassword = () => {
  numberNumber = Number(correctPassword);
  switch (baseColor) {
    case 1:
      baseColor = "red";

      break;
    case 2:
      baseColor = "green";
      break;
    case 3:
      baseColor = "blue";
      break;
    case 4:
      baseColor = "yellow";
      break;
    case 5:
      baseColor = "pink";
      break;

    default:
      break;
  }
};

setPassword();
