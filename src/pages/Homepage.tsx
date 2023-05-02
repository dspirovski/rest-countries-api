import Home from "../component/Home/Home";
import { useEffect, useState } from "react";

/**

A functional component that renders the homepage.
@returns {JSX.Element} The rendered JSX elements.
*/

const Homepage = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showCountryDetails, setShowCountryDetails] = useState(false);
  const [specificCountryDetails, setSpecificCountryDetails] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getSpecificCountryDetails = async (name: string) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) {
        alert("Something went wrong");
        setShowCountryDetails(false);
      }
      const data = await res.json();
      setSpecificCountryDetails(data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    const specificRegion = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    const allCountries = `https://restcountries.com/v3.1/all`;
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          selectedRegion === "all" ? allCountries : specificRegion
        );
        if (!res.ok) {
          alert("Something went wrong");
        }
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    getCountries();
  }, [selectedRegion]);

  return (
    <>
      <Home
        countries={countries}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setShowCountryDetails={setShowCountryDetails}
        showCountryDetails={showCountryDetails}
        getSpecificCountryDetails={getSpecificCountryDetails}
        specificCountryDetails={specificCountryDetails}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};

export default Homepage;
