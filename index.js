window.onload = async () => {
  let loadData = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2Mzg5NzA5NTAsImV4cCI6MTY0MDE4MDU1MH0.zhtAOzSK_PTe2FGUw9eCHzeLjo05foOkgEYzn_YTnaE",
      },
    }
  ).then((resp) => resp.json());

  let getRow = document.querySelector(".container > .row");

  loadData.forEach((data) => {
    let newCard = document.createElement("div");
    newCard.classList = "card";
    newCard.style.width = "18rem";
    newCard.innerHTML = `
        <img src="${data.imageUrl}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <p class="card-text">
            ${data.description}
            </p>
            <a href="#" class="btn btn-primary">${data.price}</a>
          </div>
        `;
    getRow.appendChild(newCard);
  });
};
