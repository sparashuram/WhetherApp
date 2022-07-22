import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';

function Display() {
    const [city,setCity] =useState("")
    const [result,setResult]=useState("")
    const changehandler=e =>{
       setCity([e.target.value])
    }
    const submithandler=e =>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
          res =>res.json()
        ).then(data =>{
          const kelvin=data.main.temp;
          const celcius=273.15-kelvin
          setResult("Temperature at "+city+"\n\n\n\n"+Math.round(celcius)+"°C");
          setCity("")

      } )
    }
  return (
    <Card style={{ width: '40rem',height:'20rem' }}>
      <Card.Body style={{backgroundColor:'yellow'}}>
        <Card.Title>Wheather App</Card.Title>
        <form onSubmit={submithandler}>
        <input type="text" name="city" value={city} onChange={changehandler}></input>&nbsp;&nbsp;
        <input type="submit" value="Get temperature" ></input>
      </form>
      <h1>{result}</h1>
      </Card.Body>
    </Card>
  );
}

export default Display;