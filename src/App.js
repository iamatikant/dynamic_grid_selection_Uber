import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GridComponent cols={10} rows={10} />
    </div>
  );
}

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const getRandomCharArray = (size) => {
  let result = [];
  for (let i = 0; i < size; i++) {
    const randomChar = letters[Math.floor(Math.random() * 26)];
    result[i] = {
      [randomChar]: false,
    };
  }

  return result;
};

function GridComponent(props) {
  const { cols = 0, rows = 0 } = props;
  if (!cols || !rows) {
    return <></>;
  }

  const [gridChars, setGridChars] = useState(getRandomCharArray(rows * cols));

  const handleClick = (index) => {
    console.log("index: ", index);
    const temp = [...gridChars];
    const obj = temp[index];
    const key = Object.keys(obj)[0];
    temp[index] = {
      [key]: true,
    };

    setGridChars(temp);
  };

  const clearSelection = () => {
    const temp = [...gridChars];
    for (let i = 0; i < temp.length; i++) {
      let obj = temp[i];
      const key = Object.keys(obj)[0];
      obj[key] = false;
    }

    setGridChars(temp);
  };

  const resetGrid = () => {
    setGridChars(getRandomCharArray(rows * cols));
  };

  return (
    <>
      <h2>Something</h2>
      <div class="container">
        <div
          className="cell"
          style={{
            display: "grid",
            gridTemplateRows: `repeat(${rows}, 40px)`,
            gridTemplateColumns: `repeat(${cols}, 40px)`,
            gap: `10px`,
            justifyContent: "center",
          }}
        >
          {Array.from({ length: rows * cols }).map((_, index) => {
            const obj = gridChars[index];
            const key = Object.keys(obj)[0];
            const value = obj[key];
            const classes = value ? "highlight" : undefined;
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={classes}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div
          style={{
            margin: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button onClick={clearSelection}>Clear selection</button>
          <button onClick={resetGrid}>Reset grid</button>
        </div>
      </div>
    </>
  );
}

/**
 *
 * "add(2, sub(3, 5), 9)"
 *
 *
 *
 *
 */
