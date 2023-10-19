import axios from "axios";
class changequantityaxios {
  async changequantityaxios(url) {
    
    let axiosResponse;
    let result;
    let error = "";
   
    try {
      axiosResponse = await axios.put(url).catch((err) => {
        if (err.response.status !== 200) {
          console.log(err.response.status);
          error = err.response.status;
          throw new Error("CANNOT CHANGE QUANTITY");
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

export default new changequantityaxios();