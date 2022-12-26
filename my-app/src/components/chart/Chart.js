import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props)
{
    const dataPoints = props.data.map(datapoint => datapoint.value);
    const totalMax= Math.max(...dataPoints);

    return (
        <div className="chart">
            {props.data.map(dataPoint =>  <ChartBar key={dataPoint.label} value = {dataPoint.value} maxValue={totalMax}  label = {dataPoint.label}      />)}
        </div>
    );
}
export default Chart;