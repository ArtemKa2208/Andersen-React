import './App.css';
import React, { useCallback, useEffect } from 'react';
import Beer from './components/Beer';
import Form from './components/Form';
import ToolBar from './components/ToolBar';
import Navigation from './components/Navigation';
import { DEFAULT_PAGE, URL_API } from './constants'
import {sortBy} from './utils';
import {getBeer} from './services/requestService'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
const App = () => {

  const [beer, setBeer] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlerInput = ({ target: { value } }) => {
    if (value.trim()) {
      getBeer(setBeer,DEFAULT_PAGE, URL_API + `?beer_name=${value}`)
    } else {
      getBeer(setBeer);
    }
  }
 
  useEffect(() => {
    getBeer(setBeer);
  }, [])

  return (
    <div className='App'>
      <ToolBar handleShow={handleShow} handlerInput={handlerInput} sortBy={(e) => sortBy(e,setBeer,getBeer,beer)} />
      <Form handleShow={handleShow} handleClose={handleClose} show={show} />
      <div className='beerBox'>
        {beer.map((elem, index) => {
          return (
            <Beer
              key={index}
              name={elem.name}
              tagline={elem.tagline}
              first_brewed={elem.first_brewed}
              description={elem.description}
              abv={elem.abv}
              attenuation_level={elem.attenuation_level}
              brewers_tips={elem.brewers_tips}
              contributed_by={elem.contributed_by}
              ebc={elem.ebc}
              ibu={elem.ibu}
              ph={elem.ph}
              srm={elem.srm}
              target_fg={elem.target_fg}
              target_og={elem.target_og}
              image_url={elem.image_url}
              volume={elem.volume}
              boil_volume={elem.boil_volume}
              ingredients={elem.ingredients}
              food_pairing={elem.food_pairing}
            />
          )
        })}
      </div>
      <Navigation getBeer={getBeer} />
    </div>
  );
}

export default App;
