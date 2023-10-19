import axios from "axios";
class getpaymentlinkaxios {
  async getpaymentlinkaxios(amt) {

    let url = "http://localhost:8084/payment-gateway-service/Payment/pay/"+amt;
    let axiosResponse;
    let result;
    let error = "";
    console.log("in func");
    try {
      axiosResponse = await axios.post(url).catch((err) => {
        if (err.response.status !== 200) {
          console.log(err.response.status);
          error = err.response.status;
          throw new Error("CANNOT FETCH payment link");
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

export default new getpaymentlinkaxios();