import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API_KEY = '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';

const mainCharacterAnimal = 'turtle';
const mainCharacterName = 'yosi';
const kidAge = 5;
const storyLocation = "space";
const moral = "frienship";
const extra_moral = 'be a good boy';

const sumurizeLabel = "Summary of the Story:";
const sumrizePointLabel = "*";

const stroyReq = `write a story for ${kidAge} years old kids, 
where the main character is ${mainCharacterAnimal}
and his name is ${mainCharacterName}, 
the story is occurs in ${storyLocation},
and the moral of the story is ${moral} and ${extra_moral}.
the story must have twist.
At the end sumrize the main parts of the story in list of points after label of "${sumurizeLabel},
each point in sparte line with ${sumrizePointLabel} at the start of the line"`;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`
};

const GPT3params = {
  prompt: stroyReq,
  temperature: 0.5,
  max_tokens: 2028,
};


const imageReq = `${mainCharacterAnimal} in ${storyLocation} as drawing art for kids`

const imageParams = {
  prompt: imageReq,
  model: 'image-alpha-001'
};


function App() {
  const [coverImage, setCoverImage] = useState(logo);
  const [story, setStory] = useState("");
  const [storyImages, setStoryImages] = useState([]);

  useEffect(() => {
    axios.post('https://api.openai.com/v1/images/generations', imageParams, { headers: headers })
      .then(response => {
        console.log(response.data);
        setCoverImage(response.data.data[0].url);
      })
      .catch(error => {
        console.log(error);
      });


    axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', GPT3params, 
    { headers: headers })
      .then(response => {
        setStory(response.data.choices[0].text);
        console.log(response.data.choices[0].text);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(()=>{
    const storySumIndex = story.indexOf(sumurizeLabel);
    const summary = story.substring(storySumIndex + sumurizeLabel.length);
    const storyPoints = summary.split("*");
    console.log("storyPoints: ", storyPoints);
  },[story])

  return (
    <div className="App">
      <header className="App-header">
        <img src={coverImage} className="App-logo" alt="logo" />

        {
          storyImages.map((storyImage) => {
            return (
              <img src={storyImage} className="App-logo" alt="story" />
            )
          })
        }
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
