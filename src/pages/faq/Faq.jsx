import React, { useState, useEffect} from 'react';
import './Faq.css';
import constant from "../../utils/url.json";
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  
}));


const Faq = () => {
  const { t } = useTranslation();
  const [faq, setFaq] = useState(null);

  const getData = async () => {
    try {
      await axios
        .get(`${constant.url}/faq`)
        .then((res) => setFaq(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [faq]);


  return (
    <div className='faq-page'>
      <div className='faq-text'>
      <h1 className='faq-main-text'> {t("faq-main-text")}</h1>
      <h4 style={{marginTop: 18}}>{t("faq-secondary-text")}</h4>
      </div>
      {console.log(faq)}
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {faq?.map((faq) => (
          <Grid item xs={12} sm={6} md={6} key={faq.id} sx={{overflow: "hidden"}}>
            <Item>
              
              <Accordion className='faq-accordion' sx={{
                    "& .css-1elwnq4-MuiPaper-root-MuiAccordion-root": {
                      boxShadow: "none"
                    }
                  }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  
                >
                  <Typography >
                  {localStorage.getItem("language") === '"ru"' &&
                      faq.acf.question_ru}
                    {localStorage.getItem("language") === '"en"' &&
                      faq.acf.question_en}
                    {localStorage.getItem("language") === '"kgz"' &&
                      faq.acf.question_kgz}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  {localStorage.getItem("language") == '"ru"' &&
                      faq.acf.answer_ru}
                    {localStorage.getItem("language") == '"en"' &&
                      faq.acf.answer_en}
                    {localStorage.getItem("language") == '"kgz"' &&
                      faq.acf.answer_kgz}
                  </Typography>
                </AccordionDetails>
              </Accordion>
             

            </Item>
          </Grid> 
          ))}

          
        </Grid>
      </Box>
    </div>
  );
}

export default Faq;
