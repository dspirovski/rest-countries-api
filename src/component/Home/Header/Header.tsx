import { makeStyles, Typography } from '@material-ui/core'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { HeaderProps } from 'src/utils/homepageInterfaces';

const useStyles = makeStyles((theme) => ({
  dark: {
    boxSizing: 'border-box',
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    padding: '15px 50px',
    background: '#2b3742',
    marginBottom: 20,
    color: '#fff',

    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  light: {
    boxSizing: 'border-box',
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    padding: '15px 50px',
    background: '#fff',
    marginBottom: 20,

    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  title: {
    fontSize: 24,
    fontWeight: 600,
  },

  mode: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 110,

    "&:hover": {
      cursor: 'pointer'
    },
  }
}))

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const classes = useStyles()

  const changeMode = (mode: boolean) => {
    setDarkMode(mode)
  }

  return (
    <>
      <header className={darkMode ? classes.dark : classes.light}>
        <Typography className={classes.title}>Where in the world?</Typography>
        <div onClick={() => changeMode(!darkMode)}>
          {darkMode ? <div className={classes.mode}>
            <WbSunnyIcon />
            <Typography>Light mode</Typography>
          </div> : <div className={classes.mode}>
            <Brightness3Icon></Brightness3Icon>
            <Typography>Dark mode</Typography>
          </div>}
        </div>
      </header>
    </>
  )
}

export default Header

