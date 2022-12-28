import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🐈‍⬛": "Black Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🦬": "Bison",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐽": "Pig Nose",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦣": "Mammoth",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse Face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  "🦫": "Beaver",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐻‍❄️": "Polar Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster"
};

var listOfEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [output, setOutput] = useState("Translations will appear here");

  function inputHandler(event) {
    var emojiFace = event.target.value;
    output = emojiDictionary[emojiFace];
    if (output === undefined) {
      output = "Sorry! Emoji not found.";
    }
    setOutput(output);
  }

  function clickHandler(emoji) {
    //console.log("clicked", emoji)
    output = emojiDictionary[emoji];
    setOutput(output);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#5A5A5A" }}>Animal-Emoji Interpreter!</h1>
      <h4 style={{ color: "#C7C6C6" }}>
        Type any Animal-Emoji and know which animal it is
      </h4>

      <input
        placeholder="Place your animal-emojis here to know the meaning"
        style={{
          width: "50%",
          height: "5vh",
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          borderRadius: ".3rem",
          borderWidth: "0.06rem"
        }}
        onChange={inputHandler}
      ></input>
      <h3 style={{ padding: "1rem", margin: "1rem" }}>{output}</h3>
      <div>
        <p style={{ color: "#5A5A5A" }}>Emojis we know:</p>
        {listOfEmojis.map((emoji) => {
          return (
            <span
              onClick={() => clickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
