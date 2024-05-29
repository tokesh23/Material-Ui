import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

const SearchBox = ({ updateInfo }) => {
   

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "259faf99e79471d328a370b9280b4acb";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonResponse = await response.json();

            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            setError(""); // Clear any previous errors
            return result;
        } catch (error) {
            throw error 
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
       try {
        evt.preventDefault();
        console.log(city);
        setCity("")
         let newInfo =await getWeatherInfo();
         updateInfo (newInfo);
       } catch (error) {
        setError(true);
       }
    };

    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p style={{color: "red"}}>No such place exist!</p>}
        </div>
    );
};

export default SearchBox;
