import { CountriesProps } from "../../../utils/homepageInterfaces";
import { Container, Grid, makeStyles } from "@material-ui/core";
import CountryCard from "./CountryCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    display: "flex",
    justifyContent: "center",
    height: "80vh",
    alignItems: "center",
  },
  mainContainerLight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "80vh",
  },

  mainContainerDark: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "auto",
    background: "#222e37",
  },

  container: {
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  name: {
    fontWeight: 600,
    width: 200,
    height: "auto",
  },
  wrapper: {
    width: "100%",
  },
  pagination: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    gap: 5,

    [theme.breakpoints.down("md")]: {
      maxWidth: "375px",
    },
  },

  pageLink: {
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: 3,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#5AB1BB",
      color: "#fff",
    },
  },

  activeLink: {
    backgroundColor: "#5AB1BB",
  },

  previousLink: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  nextLink: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

/**

Functional component that displays a list of countries based on search value.
@param {object} props - The props object containing:
@param {Array} props.countries - An array of country objects.
@param {boolean} props.darkMode - A boolean value indicating if dark mode is enabled.
@param {string} props.searchValue - A string representing the search value.
@param {function} props.setShowCountryDetails - A function to set the value of showing specific country details.
@param {function} props.getSpecificCountryDetails - A function to get the details of a specific country.
@param {boolean} props.error - A boolean value indicating if there was an error during data fetch.
@param {boolean} props.isLoading - A boolean value indicating if data is being loaded.
@returns {JSX.Element} - The rendered JSX element.
*/

const Countries = ({
  countries,
  darkMode,
  searchValue,
  setShowCountryDetails,
  getSpecificCountryDetails,
  error,
  isLoading,
}: CountriesProps) => {
  const classes = useStyles();

  const searchedCountries = countries.filter((country: any) =>
    country.name.common.toLowerCase().includes(searchValue)
  );

  return (
    <>
      {isLoading && !error ? (
        <div className={classes.circularProgress}>
          <CircularProgress />
        </div>
      ) : (
        <div
          className={
            darkMode ? classes.mainContainerDark : classes.mainContainerLight
          }
        >
          <Container>
            <Grid container spacing={3} className={classes.container}>
              {searchedCountries.map((country: any, index: number) => {
                return (
                  <Grid
                    key={index}
                    item
                    sx={12}
                    sm={6}
                    md={4}
                    lg={3}
                    className={classes.wrapper}
                  >
                    <CountryCard
                      image={country.flags.svg}
                      name={country.name.common}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                      darkMode={darkMode}
                      setShowCountryDetails={setShowCountryDetails}
                      getSpecificCountryDetails={getSpecificCountryDetails}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default Countries;
