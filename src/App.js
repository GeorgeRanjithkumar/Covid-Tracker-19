import React, {useEffect, useState} from 'react';
import { fetchData } from './api';
import styles from './App.module.css';
import Cards from "../src/components/Cards/Cards";
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/chart/chart';


const App = () => {

  const [state, setState] = useState({
    data:{},
    country:""
  })

  useEffect(()=> {
    const mount = async () => {
      const data = await fetchData();
      setState({data});
    };
    mount();
  },[]);

const handleChange = async(country)=>{
  const data = await fetchData (country);
  setState ({data, country: country});
};

 const{data, country} = state;

  return (
    <div className={styles.container}>
            <img src='https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-04/L24QpcLHmQ.jpg' 
            className={styles.image}
            alt=''
            />
       <Cards data={data}/>
       <CountryPicker handleChange={handleChange}/>
       <Chart data={data} country={country}/>
    </div>
  )
}

export default App;
