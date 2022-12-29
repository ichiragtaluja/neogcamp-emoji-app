
# Emoji Intepreter

Know the name of the animal by either dropping any animal-emoji from the lists or just click any of the emojis and it's name will appear.


## Demo

You can refer to this video for a quick demo.

https://youtu.be/D5ZtYEqlJo4
## Tech Stack

**Client:** React, HTML5, CSS3

**Hosted On:** Codesandbox.io



## Screenshots
<img width="1208" alt="image" src="https://user-images.githubusercontent.com/114881862/210005321-e05d8980-3158-486e-b639-5b8f2d81c47b.png">




## Features

- Interpret animal-emojis on the fly.
- Cross platform


## Source Code Explanation

Used a dictionary to store all emojis and their meaning.

To get the value of the key, below function was used 

```javascript
function clickHandler(emoji) {
    
    output = emojiDictionary[emoji];

    setOutput(output);
```


