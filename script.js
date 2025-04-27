
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const image = document.getElementById('changingImage');
const title = document.querySelector('h1');

const messages = [
    "Em chọn lại đi",
    "Đồng ý không anh buồn lắm đó",                 
    "Đừng làm anh khóc mà"
];

const images = [
    'my_love_1.jpg',
    'my_love_2.jpg',
    'my_love_3.jpg',
    'my_love_4.jpg',
    'my_love_5.jpg'    
];

let clickCount = 0;
let messageIndex = 0; 
let heartInterval; // lưu interval bay trái tim

function createFloatingIcon(icon) {
    const effectContainer = document.getElementById('effect-container');
    const el = document.createElement('div');
    el.classList.add('effect-icon');
    el.textContent = icon;
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = '100vh';
    effectContainer.appendChild(el);
    setTimeout(() => {
        el.remove();
    }, 4000);
}

function startFloatingIcons(icon, count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            createFloatingIcon(icon);
        }, i * 200);
    }
}

function startInfiniteFloatingHearts() {
    heartInterval = setInterval(() => {
        createFloatingIcon('❤️');
    }, 300); // mỗi 0.3 giây tạo 1 trái tim
}

noBtn.addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + 'px';

    message.textContent = messages[messageIndex];

    image.src = images[clickCount % images.length];
    clickCount++;

    messageIndex = (messageIndex + 1) % messages.length;

    yesBtn.style.display = 'inline-block';

    startFloatingIcons('😭', 10);
});

yesBtn.addEventListener('click', () => {
    alert('Yêu em bé 😘');

    title.textContent = 'Yêu em bé ❤️'; // đổi tiêu đề
    image.src = 'my_love_8.jpg';

    message.style.display = 'none'; 
    noBtn.style.display = 'none'; 
    yesBtn.style.display = 'none'; 

    startInfiniteFloatingHearts(); // trái tim bay liên tục
});
