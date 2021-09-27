export default (props) =>(
      <div className='beerCard'>
            <img  src={props.image_url || 'http://pngimg.com/uploads/bottle/bottle_PNG2931.png'} className='beerPhotos' alt ='photo' />
            <h2 className='beer-name'>{props.name}</h2>
            <p>{props.tagline}</p>
            <p><strong>First brewed:</strong> {props.first_brewed}</p>
            <p>{props.description}</p>
            <p><strong>Abv:</strong> {props.abv}</p>
            <p><strong>Attenuation level:</strong> {props.attenuation_level}</p>
            <p><strong>Brewers tips:</strong> {props.brewers_tips}</p>
            <p><strong>Contributed by:</strong> {props.contributed_by}</p>
            <p><strong>Ebc:</strong> {props.ebc}</p>
            <p><strong>Ibu:</strong> {props.ibu}</p>
            <p><strong>Ph:</strong> {props.ph}</p>
            <p><strong>Srm:</strong> {props.srm}</p>
            <p><strong>Target FG:</strong> {props.target_fg}</p>
            <p><strong>Target OG:</strong> {props.target_og}</p>
            <p><strong>Volume:</strong> {props.volume.value} {props.volume.unit} </p>
            <p><strong>Boil volume:</strong> {props.boil_volume.value} {props.boil_volume.unit}</p>
            <h2>Ingredients:</h2>
            <h3>Hops</h3>
            {props.ingredients.hops.map( (elem,index) => {
                  return(
                        <p key = {'hops'+index}>{elem.name}: {elem.amount.value} {elem.amount.unit}</p>
                  )
            })}
            <h3>Malt</h3>
            {props.ingredients.malt.map( (elem,index) => {
                  return(
                        <p key = {'malt'+index}>{elem.name}: {elem.amount.value} {elem.amount.unit}</p>
                  )
            })}
            <h3>Yeast</h3>
            <p>{props.ingredients.yeast}</p>
            <h2>Food pairing:</h2>
            {props.food_pairing.map( (elem,index) => {
                  return(
                        <p key={'food'+index}>{index+1}) {elem}</p>
                  )
            })}
      </div>
)