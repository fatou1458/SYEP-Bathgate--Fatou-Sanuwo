id: 1,
    name: 'Tanisha',
    job: 'friend of fatous',
    img: 'https://github.com/strawb3rryyy/SYEP-Bathgate-BrihannaTorres/blob/main/1203FF24-87D7-40BA-AD13-2EC7EFB5F530.jpeg?raw=true',
    text: "Your very nice, You have a good personatilty, Your hair is always done, you take time to actually get to know people.",
  },
  {
    id: 2,
    name: 'Rayna',
    job: 'friend of fatous ',
    img:  'https://github.com/strawb3rryyy/SYEP-Bathgate-BrihannaTorres/blob/main/21D7D03D-F7FA-4985-87F0-94594DB2F5FA.jpeg?raw=true',
    text: '',
  },
  {
    id: 3,
    name: '',
    job: 'Friend of fatous',
    img:  'https://github.com/strawb3rryyy/SYEP-Bathgate-BrihannaTorres/blob/main/558F8677-162F-4BDA-8998-DE4D810E6A0D.jpeg?raw=true',
    text: 'You are the funniest person to be around, You always show up for people when its always needed. When we first met, your facial expressions gave off you were mean, but you are a geniune person. You are so kind to people. When im feeling down, your always the first person to tell me to get up, breathe and take a walk when its needed. You are a friend someone needs in life.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});