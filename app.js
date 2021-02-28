const reviews = [{
        id: 1,
        name: "David Kirk",
        job: "UX Designer",
        img: "/img/person1.png",
        text: "Some text about David Kirk here",
    },
    {
        id: 2,
        name: "Tomas Lewis",
        job: "Web Developer",
        img: "/img/person3.png",
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
const name = document.getElementById('author');
const title = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn')