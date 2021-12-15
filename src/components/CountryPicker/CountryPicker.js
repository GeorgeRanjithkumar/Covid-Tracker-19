import React,{useEffect, useState} from 'react';
import {fetchCountries} from "../../api";
import { NativeSelect, FormControl} from '@mui/material';
import styles from "./CountryPicker.module.css";

const CountryPicker = ({handleChange}) => {
    const [fetchedCountry, setFetchedCountry]= useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
             setFetchedCountry(await fetchCountries());
        };

        fetchApi();
    }, []);

    console.log(fetchedCountry);

    return (
        <div>
          <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(event)=> handleChange (event.target.value)}>
            <option value="">Global</option>
            {
                fetchedCountry.map((country,index)=>(
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))
            }

          </NativeSelect>
          </FormControl>
          

        </div>
    )
}

export default CountryPicker;
