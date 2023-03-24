import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listItems = document.querySelector(".gallery");

const createGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `;
  })
  .join("");

listItems.insertAdjacentHTML("beforeend", createGalleryItem);

listItems.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}
