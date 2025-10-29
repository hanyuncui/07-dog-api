const breedSelect = document.getElementById('breed-select');

// Fetch the list of dog breeds from the Dog API
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = data.message;

    // loop through the breeds object and create an option for each breed
    for (const breed in breeds){
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed;
      breedSelect.appendChild(option);
    }
  });
 

  const gallery = document.getElementById('gallery');
  breedSelect.addEventListener('change', () => {
  const selectedBreed = breedSelect.value;
  
  // check if a bread was selected
  if (selectedBreed){
    // fetch 9 random images of the electedreed from the Dog API
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/9`)
      .then(response => response.json()) // parse the JSON from the response
      .then(data => {
        // Get the image URLs from the data
        const imageUrls = data.message;

        // Clear the gallery
        gallery.innerHTML = '';

        // Loop through the image URLs and create an image element for each
        imageUrls.forEach(imageUrl => {
          // create a new div element for the gallery item
          const galleryItem = document.createElement('div');
          galleryItem.classList.add('gallery-item');

          // create a new image element
          const img = document.createElement('img');
          // set the src attribute of the image
          img.src = imageUrl;
          // seet the alt attribute for the image
          img.alt = selectedBreed;

          // append the image to the gallery item
          galleryItem.appendChild(img);
          // append the gallery item to the gallery
          gallery.appendChild(galleryItem);
        });
      });
  }
});