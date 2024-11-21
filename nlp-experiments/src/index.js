import nlp from 'compromise';
import random from 'random';

// Function to categorize words into parts of speech
function categorizePartsOfSpeech(text) {
    // Parse the text with compromise
    const doc = nlp(text);

    // Extract words and their parts of speech
    const words = doc.json().map(line => line.terms.map(token => ({
        word: token.text, 
        partOfSpeech: token.tags}))).flat()

    // Categorize words based on parts of speech
    const categorized = {
        nouns: [],
        verbs: [],
        adjectives: [],
        adverbs: [],
        others: []
    };

    words.forEach(({ word, partOfSpeech }) => {
        if (partOfSpeech.includes('Noun')) {
            categorized.nouns.push(word);
        } else if (partOfSpeech.includes('Verb')) {
            categorized.verbs.push(word);
        } else if (partOfSpeech.includes('Adjective')) {
            categorized.adjectives.push(word);
        } else if (partOfSpeech.includes('Adverb')) {
            categorized.adverbs.push(word);
        } else {
            categorized.others.push(word);
        }
    });

    return categorized;
}

function randomlyRegenerateText(text) {
    const doc = nlp(text);

    let nouns = doc.nouns();
}

// Example usage
const text = `catch a moth in your hand 
there is a moment
where that moth may be alive 
trapped, in the dark 
surrounded by your pulse 
and then you loosen your grip 
and there is only ash on your fingers`;
const result = categorizePartsOfSpeech(text);
console.log(result);

