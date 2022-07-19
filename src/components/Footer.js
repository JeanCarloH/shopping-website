import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Grid, Stack } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        target="_blank"
        color="inherit"
        href="https://www.linkedin.com/in/jean-carlo-herrera-delgado-24273b207/"
      >
        JC Herrera y
        JC Muñoz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title, social } = props;

  return (
  
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container>
          {social.map((network) => (
            <Grid
              item
              xs={6}
              md={2}
              key={network.name}
              sx={{ textAlign: "center" }}
            >
              <Link
                target="_blank"
                display="block"
                variant="body1"
                href={network.url}
                sx={{ mb: 0.5 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <network.icon />
                  <span>{network.name}</span>
                </Stack>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
