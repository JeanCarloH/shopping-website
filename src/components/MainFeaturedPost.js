import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


function MainFeaturedPost(props) {
  const { post } = props;

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
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
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
            <Typography
              component="h1"
              variant="h4"
              text-align= "left"  //como poner texto a la izq
              color="inherit"
              style={{ backgroundColor: "#00000085" }}
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              style={{ backgroundColor: "#00000085" }}
              paragraph
            >
              {post.description}
            </Typography>


          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    imageText: PropTypes.string,
    linkText: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MainFeaturedPost;
