import axios from "axios";
class getalldeals {
  async getalldeals() {
    let url = "http://localhost:8084/deal/list";
    let axiosResponse;
    let result;
    let error = "";
    console.log("in func");
    try {
      axiosResponse = await axios.get(url).catch((err) => {
        if (err.response.status !== 200) {
          console.log(err.response.status);
          error = err.response.status;
          throw new Error("CANNOT FETCH DEALS");
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

export default new getalldeals();