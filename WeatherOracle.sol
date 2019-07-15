pragma solidity ^0.4.18;

import './Ownable.sol';

contract WeatherOracle is Ownable{

	mapping (string => string) city_string_to_weather_string;
    
    function getWeather(string _location) view public returns(string){
        return city_string_to_weather_string[_location];
    }
    
    function updateWeather(string _key, string _value) external onlyOwner returns (bool success) {
        city_string_to_weather_string[_key] = _value;
        return true;
    }
}

