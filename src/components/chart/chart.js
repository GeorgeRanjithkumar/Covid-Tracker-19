import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import styles from "./chart.module.css";
import {Chart as chartJS, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from "chart.js";
import {Line,Bar} from "react-chartjs-2";

const Chart =({data:{confirmed, recovered,deaths},country})=>{
    const [dailyData, setDailyData]= useState([]);

    useEffect(()=>{
        chartJS.register(CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend,
            BarElement,);
        const fetchAPI = async()=>{
            const fetchData = await fetchDailyData();
            setDailyData(fetchData);
        };
        fetchAPI();
    },[]);
    
    const lineChart = dailyData.length?
    <Line data={{
        labels:dailyData.map(({date})=>date),
        datasets:[
            {
                data:dailyData.map(({confirmed})=>confirmed),
                label:"infected",
                borderColor:"#3333ff",
                fill:true,
            },
            {
                data:dailyData.map(({deaths})=>deaths),
                label:"deaths",
                borderColor:"red",
                backgroundColor:"rgba(255,0,0,0.5)",
                fill:true,
            },
        ],
    }}
    />
    :null;

    const barChart = confirmed?(
        <Bar
         data={{
             labels:["Infected","Recovered","Deaths"],
             datasets:[
                 {
                     label:"people",
                     backgroundColor:[
                         "rgba(0,0,255,0.5)",
                         "rgba(0,255,255,0.5)",
                         "rgba(255,0,255,0.5)",
                     ],
                     data:[confirmed.value,recovered.value, deaths.value],
                 }
             ]
         }}
        />
    ): null;
    return (
        <div className={styles.container}>
           {country ? barChart:lineChart}
        </div>
    );
};

export default Chart;
