document.getElementById("btnSearch").addEventListener("click", fetchPictures);

async function fetchPictures() {
    const searchTerm = document.getElementById("searchPhrase").value;
    const apiKey = "n6VGvCPo3r5M8LsF6vVbIMLl3vu8D7xW"; // https://api.giphy.com/v1/gifs/random?api_key=RJmmhZ8HBDbxZ5qM4I418sKy5rkfu3HO&tag=any&rating=g
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=10&rating=g`;

    try {
        const responseGiphy = await fetch(url);
        const jsonGiphy = await responseGiphy.json();
        const dataGiphy = jsonGiphy.data;

        // Clear previous results
        document.getElementById("divGiphy").innerHTML = "";

        // Loop through the GIFs and display them
        dataGiphy.forEach(element => {
            const newImage = document.createElement("img");
            newImage.src = element.images.original.url;
            newImage.alt = element.title;
            document.getElementById("divGiphy").append(newImage);
        });
    } catch (error) {
        console.error("Error fetching data from Giphy API:", error);
    }
}
function saveGif(gifUrl) {
    let savedGifs = JSON.parse(localStorage.getItem('savedGifs')) || [];
    savedGifs.push(gifUrl);
    localStorage.setItem('savedGifs', JSON.stringify(savedGifs));
    alert('GIF Saved!');
}

document.querySelectorAll('#results img').forEach(img => {
    img.style.margin = '10px'; // Adds spacing around each GIF
});

