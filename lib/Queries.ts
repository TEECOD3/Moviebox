// const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
// export const getmovies = async (querystring: string) => {
//   const fullquery = `${baseurl}/ ${querystring}`;
//   const urlsearch = new URLSearchParams(fullquery);
//   const response = await fetch(urlsearch, {
//     next: { revalidate: 60 },
//   });
//   if (!response.ok) {
//     return undefined;
//   }
//   return response.json();
// };
