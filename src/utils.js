export const sortBy = ({ target: { value } },setBeer,getBeer,beer) => {
  let arrBeer = [...beer];
  switch (value) {
    case 'Name':
      arrBeer.sort((a, b) => a.name > b.name ? 1 : -1);
      setBeer(arrBeer)
      break;
    case 'Abv(increasing)':
      arrBeer.sort((a, b) => a.abv > b.abv ? 1 : -1);
      setBeer(arrBeer)
      break;
    case 'Abv(decay)':
      arrBeer.sort((a, b) => a.abv < b.abv ? 1 : -1);
      setBeer(arrBeer)
      break;
    case 'Default':
      getBeer();
      break
  }
}