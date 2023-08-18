import React, { useState, useEffect} from 'react'
import axios from 'axios'
import constant from "../../utils/url.json";

const Why = () => {
  const [why, setWhy] = useState(null);

  const getData = async () => {
    try {
      await axios
        .get(`${constant.url}/why_doclab`)
        .then((res) => setWhy(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      {console.log(why)}
      
              <section  className='bg-dark'>

<div className="container-about" style={{
    padding: "40px 0"
}}>
  <div className="px-xl-8 px-md-5 px-3">
    {why?.map((why) => (
      <div key={why.id}>
    <h1 className="text-white fs-lg-6 fs-md-4 fs-3 my-lg-4 my-3">
    {localStorage.getItem("language") == '"ru"' &&
                      why.acf.text_page_ru}
                    {localStorage.getItem("language") == '"en"' &&
                      why.acf.text_page_en}
                    {localStorage.getItem("language") == '"kgz"' &&
                      why.acf.text_page_kgz}
    </h1>
    <p className="text-light w-lg-75 fs-1">
    {localStorage.getItem("language") == '"ru"' &&
                      why.acf.short_text_ru}
                    {localStorage.getItem("language") == '"en"' &&
                      why.acf.short_text_en}
                    {localStorage.getItem("language") == '"kgz"' &&
                      why.acf.short_text_kgz}
    </p>
    </div>
    ))}
    {why?.map((why) => (
          <div className="row mt-5 why-page" key={why.id}>
      <div className="col-md-3"><img className="img-fluid" src={why.acf.image} style={{
        padding: "10px 15px"
      }} alt="" /></div>
      <div className="col-md-9 mt-2 mb-md-0">
        <h1 className="text-white fs-2 fs-lg-3 my-2">
        {localStorage.getItem("language") == '"ru"' &&
                      why.acf.reason_ru}
                    {localStorage.getItem("language") == '"en"' &&
                      why.acf.reason_en}
                    {localStorage.getItem("language") == '"kgz"' &&
                      why.acf.reason_kgz}
        </h1>
        <p className="text-light fs-1">
        
        {localStorage.getItem("language") == '"ru"' &&
                      why.acf.descr_ru}
                    {localStorage.getItem("language") == '"en"' &&
                      why.acf.descr_en}
                    {localStorage.getItem("language") == '"kgz"' &&
                      why.acf.descr_kgz}
        </p>
      </div>
    </div>
    ))}

    {/* <div className="row mt-5 why-page">
      <div className="col-md-3"><img className="img-fluid" src="https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg" alt="" /></div>
      <div className="col-md-9 mt-2 mb-md-0">
        <h1 className="text-white fs-2 fs-lg-3 my-2">Расширенный набор лабораторных тестов:</h1>
        <p className="text-light fs-1">современное оборудование позволит проводить не только стандартные диагностические исследования раковых заболеваний в соответствии с рекомендациями ВОЗ (Всемирной Организации Здравоохранения) и NCI (Национальный Институт Рака США), но и самые новейшие тесты, позволяющие, например, подобрать оптимальную современную химиотерапию или сделать прогноз по дальнейшему течению заболевания.</p>
      </div>
    </div>
    <div className="row mt-5 why-page">
      <div className="col-md-3"><img className="img-fluid" src="https://static.javatpoint.com/blog/images/advantages-and-disadvantages-of-technology3.png" alt="" /></div>
      <div className="col-md-9 mt-2 mb-md-0">
        <h1 className="text-white fs-2 fs-lg-3 my-2">Передовой опыт и международные консультации:</h1>
        <p className="text-light fs-1">наша лаборатория объединяет передовой опыт и современные методы, применяемые в Соединенных Штатах Америки и Российской Федерации.Мы гордимся возможностью предложить нашим пациентам услугу "второе мнение". Внедрение технологий цифровой патологии позволит проводить дистанционные консультации лучших специалистов-патоморфологов США, России и всего мира. Наша сеть международных экспертов готова обеспечить мгновенный доступ к знаниям и опыту, помогая обеспечить наивысшую степень точности и надежности диагноза.</p>
      </div>
    </div>
    <div className="row mt-5 why-page">
      <div className="col-md-3"><img className="img-fluid" src="https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg" alt="" /></div>
      <div className="col-md-9 mt-2 mb-md-0">
        <h1 className="text-white fs-2 fs-lg-3 my-2">Социальная значимость:</h1>
        <p className="text-light fs-1">В рамках благотворительной инициативы нашей лаборатории, мы стремимся помочь детям, страдающим от онкологических заболеваний. Мы обеспечим бесплатный доступ к самым современным методам диагностики для детей-сирот и детей из малообеспеченных семей.</p>
      </div>
    </div> */}
  </div>
</div>

</section>
      

    </div>
  )
}

export default Why
