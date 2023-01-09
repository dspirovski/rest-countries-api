export interface HomeProps {
  countries: Array<any>,
  selectedRegion: string,
  setSelectedRegion: (data: string) => void
  darkMode: boolean,
  setDarkMode: (data: boolean) => void
  setSearchValue: (data: string) => void
  searchValue: string
  setShowCountryDetails: (data: boolean) => void
  showCountryDetails: boolean
  getSpecificCountryDetails: (data: string) => void,
  specificCountryDetails: any,
  error: boolean,
  isLoading: boolean,
}

export interface CountryCardProps {
  image?: any,
  name: string,
  population: number,
  region: string,
  capital: string,
  darkMode: boolean,
  setShowCountryDetails: (data: boolean) => void,
  getSpecificCountryDetails: (data: string) => void,
}

export interface SubHeaderProps {
  selectedRegion: string,
  setSelectedRegion: (data: string) => void
  darkMode: boolean,
  setSearchValue: (data: string) => void
  searchValue: string
}

export interface CountriesProps {
  countries: Array<any>
  darkMode: boolean,
  searchValue: string
  setShowCountryDetails: (data: boolean) => void
  getSpecificCountryDetails: (data: string) => void,
  error: boolean,
  isLoading: boolean,
}

export interface HeaderProps {
  darkMode: boolean,
  setDarkMode: (data: boolean) => void
}

export interface CountryDetailsProps {
  setShowCountryDetails: (data: boolean) => void
  specificCountryDetails: any,
  setSearchValue: (data: string) => void
  darkMode: boolean,
  isLoading: boolean,
  error: boolean,
}