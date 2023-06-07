let form = document.getElementById("form");
let sName = "";
let imgContainer=document.getElementById("imgContainer")


form.addEventListener("submit", (e) => {
  e.preventDefault();
  sName = document.getElementById("sName").value;
  imgContainer.innerHTML=""

  fetch(`https://api.tvmaze.com/search/shows?q=${sName}`)
    .then((response) => response.json())
    .then((data) => {
      // Verarbeiten Sie die API-Antwort
      console.log(data)
      data.forEach(element => {
        imgContainer.innerHTML+=`<img src=${element.show.image.medium}>`
      });
    })
    .catch((error) => {
      // Behandeln Sie einen Fehler bei der API-Anfrage
      console.error(error);
    });

  form.reset();
});

