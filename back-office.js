let getName = document.getElementById("name");
let getDescription = document.getElementById("description");
let getBrand = document.getElementById("brand");
let getImgUrl = document.getElementById("img-url");
let getPrice = document.getElementById("price");
let getPostBtn = document.getElementById("post-btn");

let product = {
  name: `Johnny`,
  description: `this is a description`,
  brand: `Audi`,
  imageUrl:
    "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
  price: 100,
};

let getData = async () => {
  let product = {
    name: `${getName.value}`,
    description: `${getDescription.value}`,
    brand: `${getBrand.value}`,
    imageUrl: `${getImgUrl.value}`,
    price: `${getPrice.value}`,
  };
  const result = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: `POST`,
      body: JSON.stringify(product),

      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2Mzg5NzA5NTAsImV4cCI6MTY0MDE4MDU1MH0.zhtAOzSK_PTe2FGUw9eCHzeLjo05foOkgEYzn_YTnaE",
      },
    }
  );
  let data = await result.json();
  console.log(data);
};
// getData();
getPostBtn.addEventListener("click", getData);
