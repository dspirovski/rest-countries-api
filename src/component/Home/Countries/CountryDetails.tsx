import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CountryDetailsProps } from 'src/utils/homepageInterfaces';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    margin: 'auto',
  },

  leftSection: {
    width: '50%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down("md")]: {
      height: 'auto',
      padding: '20px 0',
    },
  },

  rightSection: {
    height: '50%',
    paddingLeft: 10,
    width: 'auto',

    [theme.breakpoints.down("md")]: {
      marginTop: 50,
    },
  },

  wrapper: {
    position: 'relative',
    height: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',

    [theme.breakpoints.down("md")]: {
      height: 'auto',
    },
  },

  backButton: {
    marginTop: -100,
    position: 'absolute',

    [theme.breakpoints.down("md")]: {
      marginTop: -60,
    },
  },

  boldText: {
    fontWeight: 700,
  },
  normalWeight: {
    fontWeight: 500,
  },

  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    height: '80vh',
    alignItems: 'center',
  },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  darkModeText: {
    color: '#fff',
    fontWeight: 700,
  },

}));


const CountryDetails = ({ specificCountryDetails, setShowCountryDetails, setSearchValue, darkMode, error, isLoading }: CountryDetailsProps) => {

  const classes = useStyles()

  const toHomePage = () => {
    setShowCountryDetails(false)
    setSearchValue('')
  }

  return (
    <>
      {isLoading && !error ? <div className={classes.circularProgress}>
        <CircularProgress />
      </div>
        : <>
          {specificCountryDetails && specificCountryDetails.map((data: any, index: number) => {
            return (
              <Grid key={index} container className={classes.container}>
                {isLoading && !error && <h4>Loading........</h4>}
                {error && !isLoading && alert(error)}
                <Grid item xs={12} sm={12} md={6} className={classes.leftSection}>
                  <Grid container className={classes.wrapper}>
                    <Grid item>
                      <Button
                        onClick={() => toHomePage()}
                        variant="contained"
                        color="primary"
                        className={classes.backButton}
                        startIcon={<ArrowBackIosIcon />}
                      >
                        Back
                      </Button>
                    </Grid>
                    <img className={classes.image} src={data.flags.png} alt='img' />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.rightSection}>
                  <Typography className={darkMode ? classes.darkModeText : ''} gutterBottom variant="h5" component="h1">{data.name.official}</Typography>
                  <Grid container className={classes.details}>
                    <Grid item>
                      <Typography className={darkMode ? classes.darkModeText : classes.boldText}>Population: <span className={classes.normalWeight}>{data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></Typography>

                      <Typography className={darkMode ? classes.darkModeText : classes.boldText}>Region: <span className={classes.normalWeight}>{data.region}</span></Typography>
                      <Typography className={darkMode ? classes.darkModeText : classes.boldText}>Sub Region: <span className={classes.normalWeight}>{data.subregion}</span></Typography>
                      <Typography className={darkMode ? classes.darkModeText : classes.boldText}>Capital: <span className={classes.normalWeight}>{data.capital}</span></Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={darkMode ? classes.darkModeText : classes.boldText}>Top level domain: <span className={classes.normalWeight}>{data.tld}</span></Typography>
                      <Typography className={darkMode ? classes.darkModeText : classes.boldText}>Currency: <span className={classes.normalWeight}>{Object.keys(data.currencies).map((currency: any, index: number) => {
                        return `${index !== 0 ? ", " : ""}${currency}`
                      })}</span></Typography>
                      <Typography className={darkMode ? classes.darkModeText : classes.boldText}>Languages:<span className={classes.normalWeight}>{Object.values(data.languages).map((item: any, index: number) => {
                        return `${index !== 0 ? ", " : ""}${item}`
                      })}</span></Typography>
                    </Grid>
                    <Grid item>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid >
            )
          })
          }
        </>}

    </>
  )
}

export default CountryDetails
