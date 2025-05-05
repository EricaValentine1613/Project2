document.getElementById("btnSearch").addEventListener ("click",fetchPictures)

async function fetchPictures () {

    let searchTerm = document.getElementById("searchPhrase").value
    let responseGiphy = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=&tag=&rating=g`)
    
    let jsonGiphy = await responseGiphy.json()
    let dataGiphy = jsonGiphy.data
    document.getElementById("divGiphy").innerHTML=""
    dataGiphy.forEach(element => {
        let newImage = document.createElement ("img")
        newImage.src = element.images.original.url
        document.getElementById("divGiphy").append(newImage)
    });
}