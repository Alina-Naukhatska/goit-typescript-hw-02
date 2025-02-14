import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'o4kceB0RXFOawM_NBkIftFk__-_umbHUh5EOCNcRgrs';

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: Photo[];
}

export const fetchPhotos = async (query: string, page: number): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(`${BASE_URL}/search/photos`, {
    params: {
      page,
      query,
      client_id: ACCESS_KEY,
    },
  });
  return data;
};