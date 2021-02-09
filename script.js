'use strict';

// Selecting Elements
const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('#search-input');
const videoContainer = document.querySelector('#video-container');

// Credientials
const YOUTUBE_API_KEY = "AIzaSyABsnIkGtmjmbQ2XXkl16AoyIhy40sYPKA";


searchForm.addEventListener('submit', e => {

  e.preventDefault();
  const search = searchInput.value.replaceAll(' ', '%20');

  videoContainer.innerHTML = '';

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&key=${YOUTUBE_API_KEY}`;
  // console.log(url);


  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      
      data.items.forEach(item => {
        const videoId = item.id.videoId;
        // console.log(videoId);

        videoContainer.innerHTML += `
          <div>
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        `;
      });

    })
    .catch(err => {
      alert(`Result not found, ${err.message}`);
    })
  
});

