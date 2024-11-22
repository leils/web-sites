import nlp from 'compromise';
import random from 'random';

// // Function to categorize words into parts of speech
// function categorizePartsOfSpeech(text) {
//     // Parse the text with compromise
//     const doc = nlp(text);

//     // Extract words and their parts of speech
//     const words = doc.json().map(line => line.terms.map(token => ({
//         word: token.text, 
//         partOfSpeech: token.tags}))).flat()

//     // Categorize words based on parts of speech
//     const categorized = {
//         nouns: [],
//         verbs: [],
//         adjectives: [],
//         adverbs: [],
//         others: []
//     };

//     words.forEach(({ word, partOfSpeech }) => {
//         if (partOfSpeech.includes('Noun')) {
//             categorized.nouns.push(word);
//         } else if (partOfSpeech.includes('Verb')) {
//             categorized.verbs.push(word);
//         } else if (partOfSpeech.includes('Adjective')) {
//             categorized.adjectives.push(word);
//         } else if (partOfSpeech.includes('Adverb')) {
//             categorized.adverbs.push(word);
//         } else {
//             categorized.others.push(word);
//         }
//     });

//     return categorized;
// }

// [ { name: 'a', num: 2 }, { name: 'b', num: 3 }, { name: 'c', num: 4 } ] 


function randomlyRegenerateText(text) {
    const doc = nlp(text);

    const words = doc.json().map(line => line.terms.map(token => ({
        word: token.text,
        partOfSpeech: token.tags
    }))).flat();

    const nouns = words.filter((w) => w.partOfSpeech.includes('Noun'));
    console.log(nouns);

    const nounString = nouns.map(n => n.word).join(', ');

    const nounsElement = document.createElement('p');
    nounsElement.textContent = nounString;

    document.body.appendChild(nounsElement);
}

// Example usage
const text = `catch a moth in your hand 
there is a moment
where that moth may be alive 
trapped, in the dark 
surrounded by your pulse 
and then you loosen your grip 
and there is only ash on your fingers`;


document.onvisibilitychange = function() {
    if (document.visibilityState === 'visible') {
        randomlyRegenerateText(text);
    }
}