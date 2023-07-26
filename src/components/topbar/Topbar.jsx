import React, { useState, useEffect } from "react";
import "./Topbar.css";
import constant from "../../utils/url.json";
import axios from "axios";

import MenuIcon from "@mui/icons-material/Menu";
import curelineLogo from "../../curelineLogo.png";
import useLocalStorage from "../../hooks/use-localstorage";
import MenuItem from "@mui/material/MenuItem";
import i18n from "../../i18n";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputIcon from "@mui/icons-material/Input";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import newlogo from '../../images/newlogo.svg';

import PersonIcon from '@mui/icons-material/Person';
const Topbar = (props) => {
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
      sx={{ textAlign: "center", width: "300px" }}
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
          textAlign: "start",
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
            </Link><ArrowDropDownIcon/>

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
      </Box>
    </Box>
  );

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <header style={{ width: "90%", margin: "0 auto", position: "fixed", zIndex: "999", left: "0", right: "0", top: "20px"
  }}>
      <div className="header-area " style={{borderRadius: "50px"}}>
        <div
          className="header-sticky main-header"
        >
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="header-left d-flex align-items-center">
                <div className="logo">
                  <a href="/" style={{padding: "0"}}>
                    <img
                      src={newlogo}
                      style={{ width: "100px" }}
                      alt="doclablogo"
                    />
                  </a>
                </div>

                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    {menus?.map((menu) => (
                      <ul id="navigation" key={menu.id}>
                        <li>
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
                          {" "}
                          <Link className="links" to={menu.acf.menu_two_url}>
                            {localStorage.getItem("language") == '"ru"' &&
                              menu.acf.menu_two_ru}
                            {localStorage.getItem("language") == '"en"' &&
                              menu.acf.menu_two_en}
                            {localStorage.getItem("language") == '"kgz"' &&
                              menu.acf.menu_two_kgz}
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link
                                className="links"
                                to={menu.acf.menu_two_drop_one_url}
                              >
                                {localStorage.getItem("language") == '"ru"' &&
                                  menu.acf.menu_two_drop_one_ru}
                                {localStorage.getItem("language") == '"en"' &&
                                  menu.acf.menu_two_drop_one_en}
                                {localStorage.getItem("language") == '"kgz"' &&
                                  menu.acf.menu_two_drop_one_kgz}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="links"
                                to={menu.acf.menu_two_drop_two_url}
                              >
                                {localStorage.getItem("language") == '"ru"' &&
                                  menu.acf.menu_two_drop_two_ru}
                                {localStorage.getItem("language") == '"en"' &&
                                  menu.acf.menu_two_drop_two_en}
                                {localStorage.getItem("language") == '"kgz"' &&
                                  menu.acf.menu_two_drop_two_kgz}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="links"
                                to={menu.acf.menu_two_drop_three_url}
                              >
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
                          <Link className="links" to={menu.acf.menu_three_url}>
                            {localStorage.getItem("language") == '"ru"' &&
                              menu.acf.menu_three_ru}
                            {localStorage.getItem("language") == '"en"' &&
                              menu.acf.menu_three_en}
                            {localStorage.getItem("language") == '"kgz"' &&
                              menu.acf.menu_three_kgz}
                          </Link>
                        </li>

                        <li>
                          <Link className="links" to={menu.acf.menu_four_url}>
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

              <div className="header-right1 d-flex align-items-center main-menu d-none d-lg-block">
                <div className="search d-none d-lg-block">
                  <ul className="d-flex align-items-center " id="navigation">
                    <li className="mr-15">
                      <div className="nav-search search-switch">
                        <CallIcon
                          fontSize="small"
                          style={{
                            margin: "8px 8px",
                          }}
                        ></CallIcon>
                      </div>
                      <ul className="submenu">
                        <li>
                          <a href="tel:+08001118777">0-800-111-8-777</a>
                        </li>
                        <Divider />
                        <li>
                          <a href="tel:+500001659">0-500-001-659</a>
                        </li>
                        <Divider />
                        <li>
                          <a href="tel:+777001659">0-777-001-659</a>
                        </li>
                        <Divider />
                        <li>
                          <a href="tel:+558001666">0-558-001-666</a>
                        </li>
                        <Divider />
                      </ul>
                    </li>
                    <li>
                      <div>
                        <LanguageIcon
                          fontSize="small"
                          style={{
                            margin: "8px 8px",
                          }}
                        ></LanguageIcon>
                      </div>

                      <ul className="submenu">
                        <MenuItem
                          className="trans"
                          style={{ display: "flex", alignItems: "center" }}
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
                        <Divider />
                        <MenuItem
                          style={{ display: "flex", alignItems: "center" }}
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
                        <Divider />
                        <MenuItem
                          style={{ display: "flex", alignItems: "center" }}
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
                      </ul>
                    </li>
                    <li className="mr-15">
                      <div className="nav-search search-switch">
                        <SearchIcon
                          fontSize="small"
                          style={{
                            margin: "8px 8px",
                          }}
                        ></SearchIcon>
                      </div>
                    </li>
                    <li className="mr-15">
                      <div className="nav-search search-switch">
                        <PersonIcon
                          fontSize="small"
                          style={{
                            margin: "8px 8px",
                          }}
                        ></PersonIcon>
                      </div>
                    </li>
                  </ul>
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
                            margin: "0 10px 43px 15px",
                            mr: 0,
                            ml: "auto",
                            display: { md: "none" },
                            float: "inline-end",
                          }}
                        >
                          <MenuIcon fontSize="large" />
                        </IconButton>
                      </div>
              </div>
            </div>
          </div>
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
};

Topbar.propTypes = {
  window: PropTypes.func,
};

export default Topbar;
