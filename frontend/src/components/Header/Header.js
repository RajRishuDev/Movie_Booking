import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { getAllMovies } from "../../api-helpers/api-helpers";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";
import { adminActions } from "../../store/admin-slice";

const Header = () => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState("");
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllMovies()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e, val) => {
    setSelectedMovie(val);
    const movie = data.find((mov) => mov.title === val);
    if (isUserLoggedIn && movie) {
      navigate(`/booking/${movie._id}`);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#fce4ec",
        color: "#e91e63",
        fontFamily: "Roboto, sans-serif",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar>
        <Box width="20%">
          <Link to="/" style={{ color: "#e91e63", textDecoration: "none" }}>
            <MovieCreationIcon sx={{ color: "gray", marginRight: "5px" }} />
            <Typography variant="h6" component="span">
              Movie Booking
            </Typography>
          </Link>
        </Box>
        <Box width="50%" marginRight={"auto"} marginLeft="auto">
          <Autocomplete
            onChange={handleChange}
            sx={{
              borderRadius: 10,
              width: "40%",
              margin: "auto",
            }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={data.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{
                  borderRadius: 2,
                  input: { color: "#333" },
                  bgcolor: "white",
                  padding: "6px",
                }}
                variant="outlined"
                placeholder="Search Movies"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Box>
        <Box display="flex">
          <Tabs
            onChange={(e, val) => setValue(val)}
            value={value}
            textColor="inherit"
            sx={{ color: "#e91e63" }}
            indicatorColor="secondary"
          >
            {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
                <Tab to="/auth" LinkComponent={NavLink} label="Auth" />
                <Tab to="/admin" LinkComponent={NavLink} label="Admin" />
              </>
            )}

            {isUserLoggedIn && (
              <>
                <Tab LinkComponent={Link} to="/user" label="User" />
                <Tab
                  onClick={() => dispatch(userActions.logout())}
                  LinkComponent={Link}
                  to="/"
                  label="Logout"
                />
              </>
            )}

            {isAdminLoggedIn && (
              <>
                <Tab LinkComponent={Link} to="/profile" label="Profile" />
                <Tab LinkComponent={Link} to="/add" label="Add Movie" />
                <Tab
                  onClick={() => dispatch(adminActions.logout())}
                  LinkComponent={Link}
                  to="/"
                  label="Logout"
                />
              </>
            )}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
