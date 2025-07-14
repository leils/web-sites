import nlp from 'compromise';
import random from 'random';

function randomlyRegenerateText(text) {
    const doc = nlp(text);

    const words = doc.json().map(line => line.terms.map(token => ({
        word: token.text,
        partOfSpeech: token.tags
    }))).flat();

    const nouns = words.filter((w) => w.partOfSpeech.includes('Noun'));
    const nounsList = nouns.map(n => n.word).sort((a, b) => 0.5 - Math.random());

    for (const line of doc.json()) {
        for (const token of line.terms) {
            if (token.tags.includes("Noun")) {
                doc.swap(token.text, nounsList[Math.floor(Math.random()*nounsList.length)])
            }
        }
    }

    const poemElement = document.getElementById("poem");
    poemElement.setAttribute('style', 'white-space: pre;');
    poemElement.textContent = doc.text();
    document.body.appendChild(poemElement);
}

// Example usage
const text = `catch a moth in your hand 
there is a moment
where that moth may be alive 
trapped, in the dark 
surrounded by your pulse 
and then you loosen your grip 
and there is only ash on your fingers`;

const renderText = `catch a moth in your hand\r\n
there is a moment\r\n
where that moth may be alive \r\n
trapped, in the dark \r\n
surrounded by your pulse \r\n
and then you loosen your grip\r\n 
and there is only ash on your fingers`;

document.onload = function() {
    console.log('hello~!')
    const poemElement = document.getElementById("poem");
    poemElement.setAttribute('style', 'white-space: pre;');
    poemElement.textContent = renderText;
    document.body.appendChild(poemElement);
}

document.onvisibilitychange = function() {
    if (document.visibilityState === 'visible') {
        randomlyRegenerateText(text);
    }
}