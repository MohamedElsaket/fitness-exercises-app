export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c555c3d6aemshc45aef85074ce2ep11cab2jsnc3e71ecacab1",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c555c3d6aemshc45aef85074ce2ep11cab2jsnc3e71ecacab1",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export async function fetchData(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}
