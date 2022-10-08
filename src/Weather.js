import React from "react";
import axios from "axios";

export default function Weather() {
    function handleResponse(response){
        alert(`The weather in Kyiv is ${response.data.main.temp}`);
    }
    let apiKey ="094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
    return (
    
        <h2>Kyiv</h2>
    );
}