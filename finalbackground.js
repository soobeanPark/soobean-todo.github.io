const img = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

const landomImg = img[Math.floor(Math.random() * img.length)];

const bg = document.createElement("img");

bg.src = `img/${landomImg}`;

document.body.appendChild(bg);
