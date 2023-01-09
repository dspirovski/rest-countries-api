import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CountryCardProps } from '../../../utils/homepageInterfaces'
import classnames from "classnames"

const useStyles = makeStyles({

  media: {
    height: 140,
  },

  title: {
    color: '#black',
  },

  titleDark: {
    color: '#fff',
  },

  contentDark: {
    background: '#222e37',
    border: "2px solid #434d55"
  },
  contentLight: {
    background: '#fff',
  }
});

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
      {<CardActionArea onClick={() => getSpecificCountryDetails(name)}>
        <CardMedia
          className={classes.media}
          component='img'
          height='140'
          image={image}
          title={name}
        />
        <CardContent className={darkMode ? classes.contentDark : classes.contentLight}>
          <Typography className={darkMode ? classes.titleDark : classes.title} gutterBottom variant="h5" component="h2" >
            {name}
          </Typography>
          <Typography className={darkMode ? classes.titleDark : classes.title} variant='body1' color='textSecondary'>
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </Typography>
          <Typography className={darkMode ? classes.titleDark : classes.title} variant='body1' color='textSecondary'>
            Region: {region}
          </Typography>
          <Typography className={darkMode ? classes.titleDark : classes.title} variant='body1' color='textSecondary'>
            Capital: {capital}
          </Typography>
        </CardContent>
      </CardActionArea>}
    </Card >
  );
}

export default CountryCard
