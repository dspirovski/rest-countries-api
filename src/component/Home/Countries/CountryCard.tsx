import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CountryCardProps } from "../../../utils/homepageInterfaces";

const useStyles = makeStyles({
  media: {
    height: 140,
  },

  title: {
    color: "#black",
  },

  titleDark: {
    color: "#fff",
  },

  contentDark: {
    background: "#222e37",
    border: "2px solid #434d55",
  },
  contentLight: {
    background: "#fff",
  },
});

/**

Represents a card component displaying information about a specific country.
@param {Object} props - The props object containing:
@param {string} props.image - The url of the image representing the country.
@param {string} props.name - The name of the country.
@param {number} props.population - The population of the country.
@param {string} props.region - The region of the world where the country is located.
@param {string} props.capital - The name of the country's capital.
@param {boolean} props.darkMode - A boolean indicating if the component should be displayed in dark mode.
@param {function} props.setShowCountryDetails - A function to show/hide details about a specific country.
@param {function} props.getSpecificCountryDetails - A function to get more details about a specific country.
@returns {JSX.Element} - A React JSX element representing a country card.
*/

const CountryCard = ({
  image,
  name,
  population,
  region,
  capital,
  darkMode,
  setShowCountryDetails,
  getSpecificCountryDetails,
}: CountryCardProps) => {
  const classes = useStyles();

  return (
    <Card onClick={() => setShowCountryDetails(true)}>
      {
        <CardActionArea onClick={() => getSpecificCountryDetails(name)}>
          <CardMedia
            className={classes.media}
            component="img"
            height="140"
            image={image}
            title={name}
          />
          <CardContent
            className={darkMode ? classes.contentDark : classes.contentLight}
          >
            <Typography
              className={darkMode ? classes.titleDark : classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              className={darkMode ? classes.titleDark : classes.title}
              variant="body1"
              color="textSecondary"
            >
              Population:{" "}
              {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </Typography>
            <Typography
              className={darkMode ? classes.titleDark : classes.title}
              variant="body1"
              color="textSecondary"
            >
              Region: {region}
            </Typography>
            <Typography
              className={darkMode ? classes.titleDark : classes.title}
              variant="body1"
              color="textSecondary"
            >
              Capital: {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      }
    </Card>
  );
};

export default CountryCard;
