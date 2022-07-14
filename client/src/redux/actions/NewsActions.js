// import { GET_NEWS } from '../types/newsTypes';

// export const getNews = (data) => ({ type: GET_NEWS, payload: data });

// export const getNewsThunk = () => async (dispatch) => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '2d49c65e9fmsh7fcb625410773b2p121bf8jsn43295345d10b',
//       'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
//     },
//   };
//   const response = await fetch(
//     'https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty',
//     options,
//   );
//   const res = await response.json();
//   console.log(res);
//   dispatch(getNews(res));
// };
