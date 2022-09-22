import React from "react";
import Highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import PieChart from './PieChart'
import "./App.css";

highcharts3d(Highcharts) // needed to render the 3d effect

function App() {
  return <PieChart/>;
}

export default App;
