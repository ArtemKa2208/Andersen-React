import { Button} from 'react-bootstrap';
export default(props) => (
  <div className='tool-bar'>
    <input placeholder='Enter the name of the beer' type='text' onChange = {props.handlerInput}/>
    <select onChange = {props.sortBy}>
    <option disabled selected>Sort by</option>
    <option>Default</option>
    <option>Name</option>
    <option>Abv(increasing)</option>
    <option>Abv(decay)</option>
    </select>
    <Button variant="primary" onClick={props.handleShow}>
      Registration
    </Button>
  </div>
)