import { alpha, FormControl, makeStyles } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { SubHeaderProps } from "../../../utils/homepageInterfaces";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  searchDark: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    background: "#434d55",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,

    [theme.breakpoints.down("xs")]: {
      width: "50%",
      display: "flex",
      margin: "auto",
      marginBottom: 15,
    },
  },

  searchLight: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    background: "#fff",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,

    [theme.breakpoints.down("xs")]: {
      width: "50%",
      display: "flex",
      margin: "auto",
      marginBottom: 15,
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },

  selectDark: {
    color: "#1c2424",
    background: "#434d55",
    paddingLeft: 5,
  },

  selectLight: {
    color: "#1c2424",
    paddingLeft: 5,
  },

  optionDark: {
    color: "black",

    "&:hover": {
      cursor: "pointer",
      color: "black",
    },
  },

  optionLight: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  inputInput: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  formControl: {
    width: 150,
  },

  select: {
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
    },
  },

  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

/**

Renders a sub header component for the Where in the World app
@param {Object} props - The props object
@param {string} props.selectedRegion - The currently selected region
@param {function} props.setSelectedRegion - A function to set the selected region
@param {boolean} props.darkMode - A boolean to indicate whether the dark mode is enabled or not
@param {function} props.setSearchValue - A function to set the search value
@param {string} props.searchValue - The current search value
@returns {JSX.Element} - The JSX sub header component
*/

const SubHeader = ({
  selectedRegion,
  setSelectedRegion,
  darkMode,
  setSearchValue,
  searchValue,
}: SubHeaderProps) => {
  const classes = useStyles();

  const handleChange = (event: any) => {
    setSelectedRegion(event.target.value);
  };

  const searchHandler = (event: any) => {
    const toLowerCase = event.target.value.toLowerCase();
    setSearchValue(toLowerCase);
  };

  return (
    <>
      <div className={classes.container}>
        <TextField
          onChange={searchHandler}
          className={darkMode ? classes.searchDark : classes.searchLight}
          placeholder="Search…"
          value={searchValue ? searchValue : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                className={classes.closeIcon}
                onClick={() => setSearchValue("")}
              />
            ),
          }}
        />
        <div className={classes.select}>
          <FormControl className={classes.formControl}>
            <Select
              variant="standard"
              native={true}
              value={selectedRegion}
              onChange={handleChange}
              className={darkMode ? classes.selectDark : classes.selectLight}
            >
              <option value={"all"}>All</option>
              <option value={"africa"}>Africa</option>
              <option value={"americas"}>America</option>
              <option value={"asia"}>Asia</option>
              <option value={"europe"}>Europe</option>
              <option value={"oceania"}>Oceania</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
