import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const gallery = document.querySelector(".gallery");


function createGalleryMarkup(images) {
  return images
    .map(
      (img) => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}" class="gallery-link">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy">
        </a>
        <div class="info">
          <p><strong>Likes:</strong> ${img.likes}</p>
          <p><strong>Views:</strong> ${img.views}</p>
          <p><strong>Comments:</strong> ${img.comments}</p>
          <p><strong>Downloads:</strong> ${img.downloads}</p>
        </div>
      </li>
    `
    )
    .join("");
}


export function renderGallery(images) {
  gallery.innerHTML = ""; 
  gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(images));

  
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  lightbox.refresh(); 
}
