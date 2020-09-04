import axios from "axios";

export const getAllCategories = async ({
  limit = 10,
  offsetBy = 0,
  launchYear,
  successFullLaunch,
  successFullLanding,
}) => {
    let requestURL = `https://api.spaceXdata.com/v3/launches?limit=${limit}&offset=${offsetBy}`

    if(launchYear){
        requestURL = `${requestURL}&launch_year=${launchYear}`;
    }
    if(successFullLanding){
        requestURL = `${requestURL}&land_success=${successFullLanding}`;
    }
    if(successFullLaunch){
        requestURL = `${requestURL}&launch_success=${successFullLaunch}`;
    }
  try {
    let response = await axios.get(requestURL);
    return {
      categories: response.data
    };
  } catch(error) {
    return {
      error
    };
  }

  
};
