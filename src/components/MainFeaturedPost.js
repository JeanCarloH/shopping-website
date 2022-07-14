import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


function MainFeaturedPost(props) {
  const { post, arrayimages,numero } = props;
 
  return (
    
    <Paper
  
    
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        width:{xs:"100%"},
        height:{xs:"auto"},
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background-image 2s ease-in-out",
        backgroundImage: `url(${arrayimages[numero]})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={arrayimages[numero]}
         
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={8} >
          <Box
            sx={{
              position: "relative",
              p: { xs: 20, md: 38 },

              pr: { xs: 0, md: 12},
            }}
          >
        </Box>
        </Grid>
      </Grid>
    </Paper>
    
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string,
    imageText: PropTypes.string,
    linkText: PropTypes.string,
  }).isRequired,
};

export default MainFeaturedPost;
