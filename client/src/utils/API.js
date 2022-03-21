import axios from "axios";

// The getGeoData method retrieves recipes from the server
// It accepts an IP to search the recipe api for
export default {
  getGeoData: function(query) {
    return axios.get("/api/geo?", { params: { q: query } });
  }
};
