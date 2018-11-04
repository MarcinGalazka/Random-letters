const div = document.querySelector('div');
const divArray = [...document.querySelectorAll('div')];
const randomPicBtn = document.querySelector('.random');
const image = document.querySelector('section.picture');

let imagesList = [{
        img: "img/0.jpg",
        name: 'A',
    },
    {
        img: "img/1.jpg",
        name: 'B',
    },
    {
        img: "img/2.jpg",
        name: 'C',
    },
    {
        img: "img/3.jpg",
        name: 'D',
    },
    {
        img: "img/4.jpg",
        name: 'E',
    },
    {
        img: "img/5.jpg",
        name: 'F',
    },
    {
        img: "img/6.jpg",
        name: 'G',
    },
    {
        img: "img/7.jpg",
        name: 'H',
    },
    {
        img: "img/8.jpg",
        name: 'I',
    },
    {
        img: "img/9.jpg",
        name: 'J',
    },
    {
        img: "img/10.jpg",
        name: 'K',
    },
    {
        img: "img/11.jpg",
        name: 'L',
    },
    {
        img: "img/12.jpg",
        name: 'M',
    },
    {
        img: "img/13.jpg",
        name: 'N',
    },
    {
        img: "img/14.jpg",
        name: 'O',
    },
    {
        img: "img/15.jpg",
        name: 'P',
    },
    {
        img: "img/16.jpg",
        name: 'R',
    },
    {
        img: "img/17.jpg",
        name: 'S',
    },
    {
        img: "img/18.jpg",
        name: 'T',
    },
    {
        img: "img/19.jpg",
        name: 'U',
    },
    {
        img: "img/20.jpg",
        name: 'W',
    },
    {
        img: "img/21.jpg",
        name: 'X',
    },
    {
        img: "img/22.jpg",
        name: 'Y',
    },
    {
        img: "img/23.jpg",
        name: 'Z',
    },
];


// let randomIndex = () => {
//     image.style.animation = " ";
//     return Math.floor(Math.random() * imagesList.length);

// }

// let indexValue = randomIndex();


// const choosePicture = () => {

//     indexValue = randomIndex();
//     image.style.backgroundImage = `url(img/${indexValue}.jpg)`;
//     console.log(`url(img/img${indexValue}.jpg)`);
//     image.style.animation = " letters .6s";
// }


// randomPicBtn.addEventListener('click', choosePicture);

// const removeClass = () => {
//     image.classList.remove('randomAnim');
// }

let randomIndex = () => {
    if (image.classList.contains('randomAnim')) {
        image.classList.remove('randomAnim');
    } else {
        let indexValue = Math.floor(Math.random() * imagesList.length);
        image.style.backgroundImage = `url(img/${indexValue}.jpg)`;
        console.log(`url(img/img${indexValue}.jpg)`);
        image.classList.add('randomAnim');
    }
}




// randomPicBtn.addEventListener('click', removeClass);
randomPicBtn.addEventListener('click', randomIndex);