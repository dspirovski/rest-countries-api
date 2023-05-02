import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import Countries from "./Countries/Countries";
import { HomeProps } from "../../utils/homepageInterfaces";
import { makeStyles } from "@material-ui/core/styles";
import CountryDetails from "./Countries/CountryDetails";

const useStyles = makeStyles({
  darkMode: {
    background: "#222e37",
    height: "100vh",
  },

  lightMode: {
    background: "#fff",
    height: "100vh",
  },
});

/**

A functional component that renders the Home page.
@param {object} props - The props object containing the following properties:
@param {array} countries - An array of countries to be displayed.
@param {string} selectedRegion - The currently selected region to filter the countries by.
@param {function} setSelectedRegion - A function to set the selected region.
@param {boolean} darkMode - A boolean value indicating whether dark mode is enabled.
@param {function} setDarkMode - A function to set the dark mode state.
@param {function} setSearchValue - A function to set the search input value.
@param {string} searchValue - The current value of the search input.
@param {function} setShowCountryDetails - A function to toggle the display of country details.
@param {boolean} showCountryDetails - A boolean value indicating whether country details are currently being displayed.
@param {function} getSpecificCountryDetails - A function to get details of a specific country.
@param {object} specificCountryDetails - An object containing details of a specific country.
@param {object} error - An object containing error information, if any.
@param {boolean} isLoading - A boolean value indicating whether the page is currently loading.
@returns {JSX.Element} - The rendered Home page.
*/
const Home = ({
  countries,
  selectedRegion,
  setSelectedRegion,
  darkMode,
  setDarkMode,
  setSearchValue,
  searchValue,
  setShowCountryDetails,
  showCountryDetails,
  getSpecificCountryDetails,
  specificCountryDetails,
  error,
  isLoading,
}: HomeProps) => {
  const classes = useStyles();

  return (
    <div className={` ${darkMode ? classes.darkMode : classes.lightMode}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {!showCountryDetails ? (
        <>
          <SubHeader
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            darkMode={darkMode}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
          <Countries
            countries={countries}
            darkMode={darkMode}
            searchValue={searchValue}
            setShowCountryDetails={setShowCountryDetails}
            getSpecificCountryDetails={getSpecificCountryDetails}
            error={error}
            isLoading={isLoading}
          />
        </>
      ) : (
        <CountryDetails
          specificCountryDetails={specificCountryDetails}
          setShowCountryDetails={setShowCountryDetails}
          setSearchValue={setSearchValue}
          darkMode={darkMode}
          error={error}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Home;
