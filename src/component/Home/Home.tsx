import Header from './Header/Header'
import SubHeader from './SubHeader/SubHeader'
import Countries from './Countries/Countries'
import { HomeProps } from '../../utils/homepageInterfaces'
import { makeStyles } from '@material-ui/core/styles';
import CountryDetails from './Countries/CountryDetails';


const useStyles = makeStyles({
  darkMode: {
    background: "#222e37",
    height: '100vh',
  },

  lightMode: {
    background: '#fff',
    height: '100vh',
  }
});

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
  isLoading
}: HomeProps) => {
  const classes = useStyles();

  return (
    <div className={` ${darkMode ? classes.darkMode : classes.lightMode}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {!showCountryDetails ?
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

        : <CountryDetails
          specificCountryDetails={specificCountryDetails}
          setShowCountryDetails={setShowCountryDetails}
          setSearchValue={setSearchValue}
          darkMode={darkMode}
          error={error}
          isLoading={isLoading}
        />}
    </div>
  )
}

export default Home