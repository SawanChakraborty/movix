import axios from "axios";
//API CALL OCCURING
const BASE_URL = "https:/api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};
//DATA FETCHING FROM API
export const fetchDataFromApi = async (url, params) => {
    try {
        //SEARCH THE URL, THE VALUE WE GET WE SAVE IT IN {data}
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}