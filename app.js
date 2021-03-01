const reviews = [{
        id: 1,
        name: "David Kirk",
        job: "UX Designer",
        img: "url('/img/person1.png')",
        text: "Some text about David Kirk here",
    },
    {
        id: 2,
        name: "Tomas Lewis",
        job: "Web Developer",
        img: "url('/img/person3.png')",
        text: "Some text about Tomas Lewis here",
    },
    {
        id: 3,
        name: "Selena Jefferson",
        job: "UI Designer",
        img: "/img/person2.png",
        text: "Some text about Selena Jefferson here",
    }
]

const image = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
})

function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})