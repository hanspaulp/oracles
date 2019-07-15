pragma solidity 0.4.21;

contract WeatherOracle{
    
    address public owner;
    
	mapping (string => string) city_string_to_weather_string;
	
	function WeatherOracle () public {
    owner = msg.sender;
    }
    
    function getWeather(string _location) view public returns(string){
        return city_string_to_weather_string[_location];
    }
    
    function updateWeather(string _key, string _value) external returns (bool success) {
        require (msg.sender == owner);
        city_string_to_weather_string[_key] = _value;
        return true;
    }
}
