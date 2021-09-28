export default (props) => (
  <div className='navigation'>
    <button onClick = {() => props.getBeer(1)}>1</button>
    <button onClick = {() => props.getBeer(2)}>2</button>
    <button onClick = {() => props.getBeer(3)}>3</button>
    <button onClick = {() => props.getBeer(4)}>4</button>
    <button onClick = {() => props.getBeer(5)}>5</button>
  </div>
)
//Хотел вывести через цикл но не знаю как получить количество страниц