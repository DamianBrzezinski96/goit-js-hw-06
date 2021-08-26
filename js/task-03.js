const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector("ul");
// const galleryLi = document.createElement('li');
const download = images
  .map((image) => `<li class='item'><img class='photo' src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

gallery.insertAdjacentHTML('beforeend', download);


const galleryStyles = document.querySelector(".gallery");
galleryStyles.style.listStyle = 'none';
galleryStyles.style.display = 'flex';
galleryStyles.style.flexDirection = 'column';
galleryStyles.style.justifyContent = 'center';
galleryStyles.style.alignItems = 'center';
galleryStyles.style.marginBottom = '10px';

const pictureStyle = document.querySelectorAll('.gallery .item .photo');
const firstPhoto = pictureStyle[0];
firstPhoto.style.marginBottom = '20px';
firstPhoto.style.width = 'calc(95vw - 30px)';

const secondPhoto = pictureStyle[1];
secondPhoto.style.width = 'calc(95vw - 30px)';
secondPhoto.style.marginBottom = '20px';

const thirdPhoto = pictureStyle[2];
thirdPhoto.style.width = 'calc(95vw - 30px)';
