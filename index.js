import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.flat().map(item => item.name);
  
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

function reverseSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Reverse the array of words
    let reversedWords = words.reverse();

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    // Ensure the first letter is capitalized and the rest is lowercased
    let finalSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1).toLowerCase();

    return finalSentence;
}

export default MarkdownEditor;

let sentence = "hello world";
let reversed = reverseSentence(sentence);
console.log(reversed); // Outputs: "World hello"