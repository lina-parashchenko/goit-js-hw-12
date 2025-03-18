import { fetchImages } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions";
import { Spinner } from "spin.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");


const spinner = new Spinner({ color: "red", lines: 12, width: 8, radius: 14 });

let query = "";
let page = 1;
const perPage = 15;
let totalHits = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  query = event.target.elements["search-text"].value.trim();
  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

 gallery.innerHTML = "";
  page = 1;
  loadMoreBtn.classList.add("hidden");
  loader.classList.remove("hidden");
  spinner.spin(loader);

//*document.querySelector(".gallery").innerHTML = "";

  loader.classList.remove("hidden"); 
  spinner.spin(loader); //*

  try {
    const { images, total } = await fetchImages(query, page, perPage);
    totalHits = total;

    if (images.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, no images found. Please try again!",
        position: "topRight",
      });
    } else {
      renderGallery(images);
      if (perPage < totalHits)
      { loadMoreBtn.classList.remove("hidden"); }
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

loadMoreBtn.addEventListener("click", async () => {
  page += 1;
  loadMoreBtn.classList.add("hidden");
  loader.classList.remove("hidden");
  spinner.spin(loader);

  try {
    const { images} = await fetchImages(query, page, perPage);
    
    if (images.length === 0 || page * perPage >= totalHits) {
      iziToast.info({
        title: "Info",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
      loadMoreBtn.classList.add("hidden");
    } else {
      renderGallery(images, true);
      loadMoreBtn.classList.remove("hidden");
      
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
