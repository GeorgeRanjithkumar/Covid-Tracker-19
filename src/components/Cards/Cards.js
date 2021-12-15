import React from 'react';
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import {Grid} from "@mui/material";
import cx from "classnames";

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) => {
    if (!confirmed){
        return <h2>loading...</h2>;
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
            <Card
            classnames={cx(styles.card, styles.infected)}
            title="Infected"
            value={confirmed.value}
            data={new Date(lastUpdate).toDateString()}
            description="Number of actives cases of Covid-19"
            />
            <Card
            classnames={cx(styles.card, styles.recovered)}
             title="Recovered"
             value={recovered.value}
             data={new Date(lastUpdate).toDateString()}
             description="Number of recoveries from Covid-19"
            />
            <Card
            classnames={cx(styles.card, styles.deaths)}
             title="Deaths"
             value={deaths.value}
             data={new Date(lastUpdate).toDateString()}
             description="Number of deaths caused by Covid-19"
            />
            </Grid>
        </div>
    )
}

export default Cards
