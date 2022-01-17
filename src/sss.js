// import axios from "axios";
import React,{useState} from "react";
import DisplayWeather from "./DispalyWeather";


 function Weather(){

    const APIKEY='1f05d072212b7f6de271e3cad8a33ba8'

    const [form,setForm]=useState({
        city:"",
        country:""
    })
    const [weather,setWeather]=useState([])

      async  function weatherData(e){
        e.preventDefault();
        if(form.city==''){
            alert("Add Values")
        }else{
            const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            // .then((res)=>console.log(res.json()))
            .then((res)=>res.json())
            
            .then((data)=>data)
            setWeather({
                data:data
            })
        }
    }

    const handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value

        if(name=="city"){
            setForm({...form, city:value})
            
        }
        
        if(name=="country"){
            setForm({...form, country:value})
            
        }
        // console.log(form.city,form.country);
    }
     return(
         <div className="weather">

           <span className="title">Weather App</span>
           
           <br/>
         
                 
            
           <form>
             <input type="text" name="city" onChange={(e)=>handleChange(e)}  placeholder="City"/>
             <input type="text" name="country" onChange={(e)=>handleChange(e)}  placeholder="Country"/>
            <button className="grtweaather" onClick={(e)=>weatherData(e)}>Submit</button>
            </form>
 
           {
           weather.data !=undefined ?
           
           <div>
               <DisplayWeather data={weather.data}/>
           </div>
           :null
        }

        </div>
     )
 }
 export default Weather