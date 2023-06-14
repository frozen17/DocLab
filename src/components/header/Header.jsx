import React, { useState, useEffect } from "react";
import "./Header.css";
import constant from "../../utils/url.json";
import axios from "axios";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MenuIcon from "@mui/icons-material/Menu";
import curelineLogo from "../../curelineLogo.png";
import useLocalStorage from "../../hooks/use-localstorage";
import MenuItem from "@mui/material/MenuItem";
import i18n from "../../i18n";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function Header(props) {
  const [age, setAge] = React.useState("");
  const [menus, setMenus] = useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;

  const [language, setLanguage] = useLocalStorage("language", "ru");

  const handleChangeLanguage = async (language, e) => {
    await i18n.changeLanguage(language);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getData = async () => {
    try {
      await axios.get(`${constant.url}/menu`).then((res) => setMenus(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "300px"}}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          to={"#"}
          className="navbar-brand d-flex align-items-center justify-content-center"
        >
          <img
            className="img-fluid me-3"
            src={curelineLogo}
            alt=""
            style={{ width: "150px" }}
          />
        </Link>
      </Typography>
      <Divider />
      <Box
        sx={{
          padding: "10px 25px",
          textAlign: "start"
        }}
      >
        {menus?.map((menu) => (
          <div
            key={menu.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Link
              to={menu.acf.menu_one_url}
              style={{ color: "#111", margin: "8px 0" }}
              sx={{ color: "#fff" }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                menu.acf.menu_one_ru}
              {localStorage.getItem("language") == '"en"' &&
                menu.acf.menu_one_en}
              {localStorage.getItem("language") == '"kgz"' &&
                menu.acf.menu_one_kgz}
            </Link>

            <Link
              to={menu.acf.menu_two_url}
              style={{ color: "#111", margin: "8px 0" }}
              sx={{ color: "#fff" }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                menu.acf.menu_two_ru}
              {localStorage.getItem("language") == '"en"' &&
                menu.acf.menu_two_en}
              {localStorage.getItem("language") == '"kgz"' &&
                menu.acf.menu_two_kgz}
            </Link>
            <Link
              to={menu.acf.menu_two_drop_one_url}
              style={{ color: "#111", margin: "8px 0" }}
              sx={{ color: "#fff" }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                menu.acf.menu_two_drop_one_ru}
              {localStorage.getItem("language") == '"en"' &&
                menu.acf.menu_two_drop_one_en}
              {localStorage.getItem("language") == '"kgz"' &&
                menu.acf.menu_two_drop_one_kgz}
            </Link>
            <Link
              to={menu.acf.menu_two_drop_two_url}
              style={{ color: "#111", margin: "8px 0" }}
              sx={{ color: "#fff" }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                menu.acf.menu_two_drop_two_ru}
              {localStorage.getItem("language") == '"en"' &&
                menu.acf.menu_two_drop_two_en}
              {localStorage.getItem("language") == '"kgz"' &&
                menu.acf.menu_two_drop_two_kgz}
            </Link>
            <Link
              to={menu.acf.menu_two_drop_three_url}
              style={{ color: "#111", margin: "8px 0" }}
              sx={{ color: "#fff" }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                menu.acf.menu_two_drop_three_ru}
              {localStorage.getItem("language") == '"en"' &&
                menu.acf.menu_two_drop_three_en}
              {localStorage.getItem("language") == '"kgz"' &&
                menu.acf.menu_two_drop_three_kgz}
            </Link>
            <Link
              to={menu.acf.menu_three_url}
              style={{ color: "#111", margin: "8px 0" }}
              sx={{ color: "#fff" }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                menu.acf.menu_three_ru}
              {localStorage.getItem("language") == '"en"' &&
                menu.acf.menu_three_en}
              {localStorage.getItem("language") == '"kgz"' &&
                menu.acf.menu_three_kgz}
            </Link>
            <Link
              to={menu.acf.menu_four_url}
              style={{ color: "#111", margin: "8px 0" }}
              sx={{ color: "#fff" }}
            >
              {localStorage.getItem("language") == '"ru"' &&
                menu.acf.menu_four_ru}
              {localStorage.getItem("language") == '"en"' &&
                menu.acf.menu_four_en}
              {localStorage.getItem("language") == '"kgz"' &&
                menu.acf.menu_four_kgz}
            </Link>
          </div>
        ))}
        <FormControl
          sx={{ m: 1, minWidth: 120, color: "white", margin: "35px 0"}}
          size="small"
          variant="standard"
        >
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={language}
            onChange={() => handleChange}
            sx={{
              color: "black",
              fontSize: "10px",
              "& .MuiInputBase-input": {
                borderBottom: "3px solid white",
              },
            }}
          >
            <MenuItem
              className="trans"
              onClick={() => handleChangeLanguage("en", setLanguage("en"))}
              value={"en"}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"
                className="imgLng"
                alt=""
              />
              English
            </MenuItem>
            <MenuItem
              className="trans"
              onClick={() => handleChangeLanguage("ru", setLanguage("ru"))}
              value={"ru"}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                className="imgLng"
                alt=""
              />
              Русский
            </MenuItem>
            <MenuItem
              className="trans"
              onClick={() => handleChangeLanguage("kgz", setLanguage("kgz"))}
              value={"kgz"}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png"
                className="imgLng"
                alt=""
              />{" "}
              Кыргызча
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <header className="header" style={{
      width: "100%",
      position: "sticky",
      top: "0",
      zIndex: "999",
      backgroundColor: "#FFF"
    }}>
      <div className="header__top">
        <div className="container">
          <div className="row top-nav-head">
            <div>
              <ul className="header__top__left">
                <li>
                  <LocalPhoneIcon fontSize="small" />
                  <a style={{ color: "#FFF" }} href="tel:+996707070707">
                    +996707070707
                  </a>
                </li>
                <li>
                  <LocationOnIcon fontSize="small" />
                  <a
                    style={{ color: "#FFF" }}
                    href="https://goo.gl/maps/4SM7JrTKWnbfbRAe6"
                    target="blank"
                  >
                    Бишкек, ул. Замирбекова 123
                  </a>{" "}
                </li>
                <li>
                  <QueryBuilderIcon fontSize="small" /> Пн-Сб 9:00-18:00
                </li>
              </ul>
            </div>
            <div>
              <div className="header__top__right">
                <a target="blank" href="https://www.facebook.com/CurelineInc">
                  <FacebookIcon fontSize="large" />
                </a>
                <a target="blank" href="https://twitter.com/Cureline_Inc">
                  <TwitterIcon fontSize="large" />
                </a>
                <a target="blank" href="https://www.instagram.com/">
                  <InstagramIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div>
              <FormControl
                sx={{ m: 1, minWidth: 120, color: "white" }}
                size="small"
                variant="standard"
              >
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={language}
                  onChange={handleChange}
                  sx={{
                    color: "white",
                    fontSize: "10px",
                    "& .MuiInputBase-input": {
                      borderBottom: "3px solid white",
                    },
                  }}
                >
                  <MenuItem
                    className="trans"
                    onClick={() =>
                      handleChangeLanguage("en", setLanguage("en"))
                    }
                    value={"en"}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"
                      className="imgLng"
                      alt=""
                    />
                    English
                  </MenuItem>
                  <MenuItem
                    className="trans"
                    onClick={() =>
                      handleChangeLanguage("ru", setLanguage("ru"))
                    }
                    value={"ru"}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                      className="imgLng"
                      alt=""
                    />
                    Русский
                  </MenuItem>
                  <MenuItem
                    className="trans"
                    onClick={() =>
                      handleChangeLanguage("kgz", setLanguage("kgz"))
                    }
                    value={"kgz"}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png"
                      className="imgLng"
                      alt=""
                    />{" "}
                    Кыргызча
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{
        backgroundColor: "#FFF"
        // width: "100%"
      }}>
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="/#">
                <img
                  src={curelineLogo}
                  style={{
                    width: "100px"
                  }}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header__menu__option">
              <nav className="header__menu">
                {menus?.map((menu) => (
                  <ul key={menu.id}>
                    <li className="active">
                      <Link to={menu.acf.menu_one_url}>
                        {localStorage.getItem("language") == '"ru"' &&
                          menu.acf.menu_one_ru}
                        {localStorage.getItem("language") == '"en"' &&
                          menu.acf.menu_one_en}
                        {localStorage.getItem("language") == '"kgz"' &&
                          menu.acf.menu_one_kgz}
                      </Link>
                    </li>
                    <li>
                      <Link to={menu.acf.menu_two_url}>
                        {localStorage.getItem("language") == '"ru"' &&
                          menu.acf.menu_two_ru}
                        {localStorage.getItem("language") == '"en"' &&
                          menu.acf.menu_two_en}
                        {localStorage.getItem("language") == '"kgz"' &&
                          menu.acf.menu_two_kgz}
                      </Link>

                      {/* dropdown menu */}
                      <ul className="dropdown">
                        <li>
                          <Link to={menu.acf.menu_two_drop_one_url}>
                            {localStorage.getItem("language") == '"ru"' &&
                              menu.acf.menu_two_drop_one_ru}
                            {localStorage.getItem("language") == '"en"' &&
                              menu.acf.menu_two_drop_one_en}
                            {localStorage.getItem("language") == '"kgz"' &&
                              menu.acf.menu_two_drop_one_kgz}
                          </Link>
                        </li>
                        <li>
                          <Link to={menu.acf.menu_two_drop_two_url}>
                            {localStorage.getItem("language") == '"ru"' &&
                              menu.acf.menu_two_drop_two_ru}
                            {localStorage.getItem("language") == '"en"' &&
                              menu.acf.menu_two_drop_two_en}
                            {localStorage.getItem("language") == '"kgz"' &&
                              menu.acf.menu_two_drop_two_kgz}
                          </Link>
                        </li>
                        <li>
                          <Link to={menu.acf.menu_two_drop_three_url}>
                            {localStorage.getItem("language") == '"ru"' &&
                              menu.acf.menu_two_drop_three_ru}
                            {localStorage.getItem("language") == '"en"' &&
                              menu.acf.menu_two_drop_three_en}
                            {localStorage.getItem("language") == '"kgz"' &&
                              menu.acf.menu_two_drop_three_kgz}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={menu.acf.menu_three_url}>
                        {localStorage.getItem("language") == '"ru"' &&
                          menu.acf.menu_three_ru}
                        {localStorage.getItem("language") == '"en"' &&
                          menu.acf.menu_three_en}
                        {localStorage.getItem("language") == '"kgz"' &&
                          menu.acf.menu_three_kgz}
                      </Link>
                    </li>

                    <li>
                      <Link to={menu.acf.menu_four_url}>
                        {localStorage.getItem("language") == '"ru"' &&
                          menu.acf.menu_four_ru}
                        {localStorage.getItem("language") == '"en"' &&
                          menu.acf.menu_four_en}
                        {localStorage.getItem("language") == '"kgz"' &&
                          menu.acf.menu_four_kgz}
                      </Link>
                    </li>
                  </ul>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div
          className="canvas__open"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              mr: 1,
              ml: "auto",
              display: { md: "none" },
              float: "inline-end",
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="left"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </header>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
