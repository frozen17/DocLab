import React, { useState, useEffect } from "react";
import "./Servicess.scss";
import constant from "../../utils/url.json";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Servicess = () => {
  const [servicess, setServicess] = useState(null);
  const [selectedNews, setSelectedNews] = useState([]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const handleClickOpen = (
    id,
    ru_title,
    en_title,
    kgz_title,
    ru_descr,
    en_descr,
    kgz_descr
  ) => {
    setOpen(true);
    setSelectedNews([
      id,
      ru_title,
      en_title,
      kgz_title,
      ru_descr,
      en_descr,
      kgz_descr,
    ]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    try {
      await axios
        .get(`${constant.url}/services`)
        .then((res) => setServicess(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        component={"div"}
      >
        <DialogTitle id="responsive-dialog-title">
          {localStorage.getItem("language") === '"ru"' && selectedNews[1]}
          {localStorage.getItem("language") === '"en"' && selectedNews[2]}
          {localStorage.getItem("language") === '"kgz"' && selectedNews[3]}
        </DialogTitle>
        <DialogContent component={"div"}>
          <DialogContentText component={"div"}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "85%",
                margin: "15px auto",
              }}
            >
              <img src={selectedNews[4]} alt="" />
            </div>

            <DialogContentText className="selected-descr">
              {localStorage.getItem("language") === '"ru"' && selectedNews[4]}
              {localStorage.getItem("language") === '"en"' && selectedNews[5]}
              {localStorage.getItem("language") === '"kgz"' && selectedNews[6]}
            </DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions component={"div"}>
          <Button onClick={handleClose} autoFocus>
            {t("back")}
          </Button>
        </DialogActions>
      </Dialog>
      <ul className="honeycomb" lang="de">
        {servicess?.map((servicess) => (
          <li
            className="honeycomb-cell"
            key={servicess.id}
            onClick={() =>
              handleClickOpen(
                servicess.id,
                servicess.acf.ru_title,
                servicess.acf.en_title,
                servicess.acf.kgz_title,
                servicess.acf.ru_descr,
                servicess.acf.en_descr,
                servicess.acf.kgz_descr
              )
            }
          >
            <div className="honeycomb-cell-main">
              <img
              alt=""
                className="honeycomb-cell-main__image"
                src="https://shapingminds.de/wp-content/uploads/2021/03/Honeycomb_Background.png"
              />
              <div
                className="honeycomb-cell-main__title"
                style={{
                  overflowY: "scroll",
                }}
              >
                <main>
                  {localStorage.getItem("language") === '"ru"' &&
                    servicess.acf.ru_title}
                  {localStorage.getItem("language") === '"en"' &&
                    servicess.acf.en_title}
                  {localStorage.getItem("language") === '"kgz"' &&
                    servicess.acf.kgz_title}
                </main>
                <div>
                  {localStorage.getItem("language") === '"ru"' &&
                    servicess.acf.ru_descr}
                  {localStorage.getItem("language") === '"en"' &&
                    servicess.acf.en_descr}
                  {localStorage.getItem("language") === '"kgz"' &&
                    servicess.acf.kgz_descr}
                </div>
              </div>
            </div>
          </li>
        ))}

        <li className="honeycomb-cell honeycomb__placeholder"></li>
      </ul>
    </div>
  );
};

export default Servicess;
