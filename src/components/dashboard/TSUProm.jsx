import React, { Fragment, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
import {UserData} from "./Data";


function TSUProm({chartData}) {
    return <Bar data={chartData}/>;
}

export default TSUProm;