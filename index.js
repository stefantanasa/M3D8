let getName = document.getElementById("name");
let getDescription = document.getElementById("description");
let getBrand = document.getElementById("brand");
let getImgUrl = document.getElementById("img-url");
let getPrice = document.getElementById("price");

const loadToPost = async () => {
  const postData = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: `POST`,
      body: JSON.stringify({
        name: `${getName.value}`,
        description: `${getDescription.value}`,
        brand: `${getBrand.value}`,
        imageUrl:
          "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
        price: `${getPrice.value}`,
      }),

      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2Mzg5NzA5NTAsImV4cCI6MTY0MDE4MDU1MH0.zhtAOzSK_PTe2FGUw9eCHzeLjo05foOkgEYzn_YTnaE",
      },
    }
  ).then((resp) => resp.json());

  console.log(postData);
};
