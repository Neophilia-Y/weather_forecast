import React from 'react';
import { Alert } from 'react-native';
import * as Location from "expo-location";
import axios from "axios";
import Loader from "./Loader";
import Weather from "./Weather";

const API_KEY = "c48b9bb9f8b45f2b0640a3c5f39ad98c";

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: null
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp: data.main.temp,
      condition: data.weather[0].main,
    })
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    }
    catch {
      Alert("Error", "Access Deny or Your gps is turned off")
    }

  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loader /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

