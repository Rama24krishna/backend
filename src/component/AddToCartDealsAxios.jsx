import axios from "axios";
class AddToCartDealsAxios {
  async AddToCartDealsAxios(body) {
    let url = "http://localhost:8084/cart/cartdeal/add";
    let axiosResponse;
    let result;
    let error = "";
    console.log(body);
    try {
      axiosResponse = await axios.post(url,body).catch((err) => {
        if (err.response.status !== 200) {
          console.log(err.response.status);
          error = err.response.status;
          throw new Error("CANNOT ADD TO CART");
        }
        throw err;
      });
    } catch (err) {
      alert(err);
      result = err;
    }
    if (error === "") {
      result = axiosResponse.data;
    }
    console.log("resp ", axiosResponse);

    return result;
  }
}

export default new AddToCartDealsAxios();