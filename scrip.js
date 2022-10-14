const keys = Array.from(Array(10).keys());
const model = [
    { colour: "red", inner: 1, outer: 2 },
    { colour: "green", inner: 3, outer: 4 },
    { colour: "blue", inner: 5, outer: 6 },
    { colour: "yellow", inner: 7, outer: 8 },
    { colour: "violet", inner: 9, outer: 10 },
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
    const index = Math.floor(getRandomArbitrary(0, keysRemove.length + 1));
    const value = keysRemove[index];
    keysRemove = keysRemove.filter((_, ind) => ind != index);
    return { keysRemove, value };
};
const setRandom = () => {
    let key = keys;

    // SET 10 NUMBER
    for (let index = 0; index < 10; index++) {
        const { value, keysRemove } = getRandom(key);
        key = keysRemove;
        // while (!value) {
        //     const { val, keysRemove } = getRandom(key);
        //     value = val;
        //     key = keysRemove;
        //     console.log(value);
        // }

        switch (index) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 0:
                break;

            default:
                break;
        }
    }
};
const UI = () => {
    setRandom();
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
UI();