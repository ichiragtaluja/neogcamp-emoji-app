import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "đĩ": "Monkey Face",
  "đ": "Monkey",
  "đĻ": "Gorilla",
  "đĻ§": "Orangutan",
  "đļ": "Dog Face",
  "đ": "Dog",
  "đĻŽ": "Guide Dog",
  "đŠ": "Poodle",
  "đē": "Wolf",
  "đĻ": "Fox",
  "đĻ": "Raccoon",
  "đą": "Cat Face",
  "đ": "Cat",
  "đââŦ": "Black Cat",
  "đĻ": "Lion",
  "đ¯": "Tiger Face",
  "đ": "Tiger",
  "đ": "Leopard",
  "đ´": "Horse Face",
  "đ": "Horse",
  "đĻ": "Unicorn",
  "đĻ": "Zebra",
  "đĻ": "Deer",
  "đĻŦ": "Bison",
  "đŽ": "Cow Face",
  "đ": "Ox",
  "đ": "Water Buffalo",
  "đ": "Cow",
  "đˇ": "Pig Face",
  "đ": "Pig",
  "đ": "Boar",
  "đŊ": "Pig Nose",
  "đ": "Ram",
  "đ": "Ewe",
  "đ": "Goat",
  "đĒ": "Camel",
  "đĢ": "Two-Hump Camel",
  "đĻ": "Llama",
  "đĻ": "Giraffe",
  "đ": "Elephant",
  "đĻŖ": "Mammoth",
  "đĻ": "Rhinoceros",
  "đĻ": "Hippopotamus",
  "đ­": "Mouse Face",
  "đ": "Mouse",
  "đ": "Rat",
  "đš": "Hamster",
  "đ°": "Rabbit Face",
  "đ": "Rabbit",
  "đŋī¸": "Chipmunk",
  "đĻĢ": "Beaver",
  "đĻ": "Hedgehog",
  "đĻ": "Bat",
  "đģ": "Bear",
  "đģââī¸": "Polar Bear",
  "đ¨": "Koala",
  "đŧ": "Panda",
  "đĻĨ": "Sloth",
  "đĻĻ": "Otter",
  "đĻ¨": "Skunk",
  "đĻ": "Kangaroo",
  "đĻĄ": "Badger",
  "đž": "Paw Prints",
  "đĻ": "Turkey",
  "đ": "Chicken",
  "đ": "Rooster"
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
