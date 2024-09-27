import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getFirstVideoMovie(id: number) {
  const url = `${BASE_URL}/movie/${id}/videos?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const resultVideo = await axios.get(url, options);
    const resultFirstVideo = {
      name: resultVideo.data.results[0].name,
      key: resultVideo.data.results[0].key,
    };
    return resultFirstVideo;
  } catch (err) {
    console.error("Error fetching movies: ", err);
    throw new Error("Failed to fetch movies");
  }
}
