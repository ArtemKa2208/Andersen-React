import {  URL_API } from '../constants'
let defaultBeer;
export const getBeer = async (setBeer,page = 1, url = '') => {
  let response;
  if (url) {
    response = await fetch(url);
    const answer = await response.json();
    setBeer(answer)
  } else {
    if(!defaultBeer){
      response = await fetch(URL_API + `?page=${page}&per_page=80`)
      defaultBeer = await response.json();
    }
    setBeer(defaultBeer)
  }  
}