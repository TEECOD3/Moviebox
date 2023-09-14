const apikey = process.env.NEXT_PUBLIC_API_KEY;
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export const getmovies = async (queryfield: string) => {
  const url = `${baseurl}${queryfield}${apikey}`;

  try {
    const response = await fetch(url);
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
