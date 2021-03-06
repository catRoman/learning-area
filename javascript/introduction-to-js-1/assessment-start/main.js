const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Lisa',
    'Catlin',
    'Skritches'
];
let insertY = ['the apartment',
    'Salts Spring Island',
    'Camosun College'
];
let insertZ = ['attacked a mailman',
    'fell into a hole',
    'got dysentary'
];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);
    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace(/Bob/g, name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 / 14) + ' stone';
        let temperature = Math.round((94 - 32) * (5 / 9)) + ' Celsius';
        newStory = newStory.replace('94 Fahrenheit', temperature);
        newStory = newStory.replace(/300 pounds/g, weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}