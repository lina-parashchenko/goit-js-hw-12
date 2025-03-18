import { fetchImages } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions";
import { Spinner } from "spin.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loader = document.querySelector(".loader");


const spinner = new Spinner({ color: "red", lines: 12, width: 8, radius: 14 });

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = event.target.elements["search-text"].value.trim();
  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

document.querySelector(".gallery").innerHTML = "";

  loader.classList.remove("hidden"); 
  spinner.spin(loader); 

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
    } else {
      renderGallery(images);
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Try again!",
      position: "topRight",
    });
  } finally {
    spinner.stop(); 
    loader.classList.add("hidden"); 
  }
});