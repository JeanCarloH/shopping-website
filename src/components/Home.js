import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import StoreProduct from "./StoreProduct";

import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import { width } from "@mui/system";

const Home = () =>{
 
    return(
        <>
              <ResponsiveAppBar/>

        </>

     
    );
}

export default Home;