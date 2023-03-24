import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listItems = document.querySelector(".gallery");

const createGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
        `;
  })
  .join("");

listItems.insertAdjacentHTML("beforeend", createGalleryItem);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
