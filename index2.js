function reverseSentence(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(" ");

    // Reverse the array of words
    words.reverse();

    // Capitalize the first letter of the first word
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    // Join the words back into a sentence
    let reversedSentence = words.join(" ");

    return reversedSentence;
}

// Example usage
let inputSentence = "This is a sample sentence.";
let reversed = reverseSentence(inputSentence);
console.log(reversed);