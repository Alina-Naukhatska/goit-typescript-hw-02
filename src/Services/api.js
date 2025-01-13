import axios from "axios"

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'o4kceB0RXFOawM_NBkIftFk__-_umbHUh5EOCNcRgrs';


export const fetchPhotos = async (query, page) => {
    const { data } = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
            page,
            query,
            client_id: ACCESS_KEY
        }
    });
    return data;
}