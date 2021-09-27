import './App.css';
import React, { useCallback, useEffect } from 'react';
import Beer from './Beer';
import { Button, ButtonToolbar, Modal } from 'C:/Users/user/Desktop/Andersen-React/homework1/node_modules/react-bootstrap';
const App = () => {
  const [beer,setBeer] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [beerName,setBeerName] = React.useState();
  const getBeer = async (page =  1, url = '') => {
    let answer;
    if(url){
      answer = fetch(url)
    }else{
      console.log('1')
      answer = fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=80`)
    }
    answer
    .then(res => res.json())
    .then(
      (result) => {
        setBeer(result);
      },
      (err) => {
        throw err;
      }
    )
  }
  const handlerInput = (event) => {
    // setBeerName(event.target.value);
    if(event.target.value.trim()){
      getBeer(1,`https://api.punkapi.com/v2/beers?beer_name=${event.target.value}`)
    }else{
      getBeer();
    }
  }
  const sortBy = (param) => {
    console.log(beer[0])
    let arrBeer = [...beer];
    switch(param.target.value){
      case 'Name':
        arrBeer.sort((a,b) => a.name > b.name ? 1 : -1);
        setBeer(arrBeer)
        break;
      case 'Abv(increasing)':
        arrBeer.sort((a,b) => a.abv > b.abv ? 1 : -1);
        setBeer(arrBeer)
        break;
      case 'Abv(decay)':
        arrBeer.sort((a,b) => a.abv < b.abv ? 1 : -1);
        setBeer(arrBeer)
        break;
      case 'Default':
        getBeer();
        break
    }
  }
  useEffect(() =>{
    getBeer();
  },[])
  
  console.log(beer)

  return (
    <div className='App'>
      <div className='tool-bar'>
        <input placeholder='Enter the name of the beer' type='text' onChange = {handlerInput}/>
      {/* <button onClick = {() => getBeer(1,`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)} >Ok</button> */}
        <select onChange = {sortBy}>
          <option disabled selected>Sort by</option>
          <option>Default</option>
          <option>Name</option>
          <option>Abv(increasing)</option>
          <option>Abv(decay)</option>
        </select>
        <>
        <Button variant="primary" onClick={handleShow}>
        Registration
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Registration</Modal.Title>
          <button onClick={handleClose}>x</button>
        </Modal.Header>
        <Modal.Body>
          <label>Full name</label>
          <input type="text" />
          <label>Date of Birth</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" minlength="6"/>
          <label>Email</label>
          <input type="email" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Registration
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
      <div className = 'beerBox'>
        {beer.map( (elem,index) => {
          return(
            <Beer 
            key = {index} 
            name = {elem.name} 
            tagline = {elem.tagline} 
            first_brewed = {elem.first_brewed} 
            description = {elem.description}
            abv = {elem.abv}
            attenuation_level = {elem.attenuation_level}
            brewers_tips = {elem.brewers_tips}
            contributed_by = {elem.contributed_by}
            ebc = {elem.ebc}
            ibu = {elem.ibu}
            ph = {elem.ph}
            srm = {elem.srm}
            target_fg = {elem.target_fg}
            target_og = {elem.target_og}
            image_url = {elem.image_url}
            volume = {elem.volume}
            boil_volume = {elem.boil_volume}
            ingredients = {elem.ingredients}
            food_pairing = {elem.food_pairing}
            />
          )
        })}
      </div>
      <div className='navigation'>
        <button onClick = {() => getBeer(1)}>1</button>
        <button onClick = {() => getBeer(2)}>2</button>
        <button onClick = {() => getBeer(3)}>3</button>
        <button onClick = {() => getBeer(4)}>4</button>
        <button onClick = {() => getBeer(5)}>5</button>
      </div>
    </div>
  );
}

// async function GetBeer(){
//   let response = await 
//   const beer = await response.json();
//   return beer;
// }

export default App;
