export const getmovies = async (queryfield: string) => {
  const url = `https://api.themoviedb.org/3/${queryfield}4bae6b795e5f49dbdc48d8dacdac5b8e`;

  try {
    const response = await fetch(url, { cache: "reload" });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
export const getmoviedetails = async (slug: string) => {
  const url = `https://api.themoviedb.org/3/${slug}4bae6b795e5f49dbdc48d8dacdac5b8e&language=en-US`;

  try {
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function getCredits(movieId: number) {
  const api_url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bae6b795e5f49dbdc48d8dacdac5b8e&language=en-US`;
  const res = await fetch(api_url);

  if (!res.ok) throw new Error("Cannot get movie details");

  return res.json();
}

export const getvideos = async (slug: string) => {
  const url = `https://api.themoviedb.org/3/${slug}4bae6b795e5f49dbdc48d8dacdac5b8e&language=en-US`;
  console.log(url);
  try {
    const response = await fetch(url, { cache: "no-store" });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmFlNmI3OTVlNWY0OWRiZGM0OGQ4ZGFjZGFjNWI4ZSIsInN1YiI6IjY0ZmU3MWI5ZGI0ZWQ2MTAzNjNlMDgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5Usravz2mgF3KlIhmoXYEZgQf17yjeXbdXc3WJuq3I'
//   }
// };

// fetch('https://api.themoviedb.org/3/search/movie?query=john%20wick&include_adult=false&language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmFlNmI3OTVlNWY0OWRiZGM0OGQ4ZGFjZGFjNWI4ZSIsInN1YiI6IjY0ZmU3MWI5ZGI0ZWQ2MTAzNjNlMDgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5Usravz2mgF3KlIhmoXYEZgQf17yjeXbdXc3WJuq3I'
//   }
// };

// fetch('https://api.themoviedb.org/3/search/movie?query=john%20wick&include_adult=true', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
