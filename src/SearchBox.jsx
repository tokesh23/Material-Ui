import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './SearchBox.css';

const SearchBox = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "259faf99e79471d328a370b9280b4acb";
    
    const [city, setCity] = useState("");

    const getweatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
           
            let result ={
                temp:jsonResponse.main.temp,
                tempmin:jsonResponse.main.temp_min,
                tempmax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelslike:jsonResponse.main.feels_like,
                weather:jsonResponse    .weather[0].description,
                
            }
            console.log(result)
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        getweatherInfo();
        setCity(""); // Clear the input after submitting
    };

    return (
        <div className='searchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Outlined"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}

export default SearchBox;
