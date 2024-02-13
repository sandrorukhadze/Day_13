"use strict";

// slider
const dataSLider = [
  {
    id: 1,
    imageUrlSlide:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    slideTitle: "slider title 1",
  },
  {
    id: 2,
    imageUrlSlide:
      "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    slideTitle: "slider title 2",
  },
  {
    id: 3,
    imageUrlSlide:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    slideTitle: "slider title 3",
  },
  {
    id: 4,
    imageUrlSlide:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    slideTitle: "slider title 4",
  },
];

const sliderContent = document.getElementById("slider-content");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let sliderIndex = 0;

// სლაიდერის სტრუქტურის აწყობა
//div-ის შექმნა
function createDivTag() {
  const div = document.createElement("div");

  return div;
}

// სურათის შექმნა
function createImgTag(item) {
  const tagImage = document.createElement("img");
  tagImage.setAttribute("src", item.imageUrlSlide);
  tagImage.setAttribute("alt", item.slideTitle);

  return tagImage;
}

// სათაურის შემქნა
function createTitle(item) {
  const titleTag = document.createElement("h2");
  titleTag.textContent = item.slideTitle;

  return titleTag;
}

// dots შექმნა
function createDots() {
  const divDots = document.createElement("div");
  divDots.classList.add("dots-Wraper");

  dataSLider.forEach((element) => {
    const dot = document.createElement("div");
    dot.setAttribute('data-id', element.id - 1);
    dot.addEventListener('click', function(e) {
      const idDot = e.target.getAttribute('data-id');
      // console.log(idDot);
      sliderIndex = idDot;
      slide();
    })
    dot.classList.add("dot-item");
    divDots.appendChild(dot);
  });

  return divDots;
}

// მთავარი სლაიდერს ფუნქცია,რომელი სლაიდი უნდა გამოჩნდეს
function slide() {
  sliderContent.innerHTML = " ";
  const slideItemDiv = createDivTag();
  const imgTag = createImgTag(dataSLider[sliderIndex]);
  const titleTag = createTitle(dataSLider[sliderIndex]);
  const dotsElement = createDots();

  slideItemDiv.appendChild(imgTag);
  slideItemDiv.appendChild(titleTag);
  console.log(dotsElement);

  sliderContent.appendChild(slideItemDiv);
  sliderContent.appendChild(dotsElement);
}

slide();

// ისრების ფუნქციონალი
function arrowLeftClick() {
  if (sliderIndex <= 0) {
    sliderIndex = dataSLider.length - 1;
    slide();
    return;
  }
  sliderIndex--;
  slide();
}

function arrowRigthClick() {
  if (sliderIndex >= dataSLider.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex++;
  slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRigthClick);

// setInterval( () => {
//   arrowRigthClick();
// }, 3000)
