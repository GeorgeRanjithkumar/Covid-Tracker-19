import React from "react";
// import styles from "./Card.module.css";
import {Grid,Card,CardContent,Typography} from "@mui/material/";
import Countup from "react-countup";

const CustomCard = ({ classnames, title, value, data, description }) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={classnames}>
          <CardContent>
             <Typography color="GrayText">{title}</Typography>
             <Typography variant="h5">
               <Countup start={0} end={value} duration={3} separator=","/>
             </Typography>
             <Typography color="GrayText">{data}</Typography>
             <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Grid>
    );
};

export default CustomCard;