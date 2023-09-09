import React from "react";

import symbol1 from '../images/symbol1.png';
import symbol2 from '../images/symbol2.png';
import image from '../images/image.png';
import image3 from '../images/image3.png';


import styles from "../styles/Main.module.css";

const Main = () => (
  <div>
    <header className={styles.hero}>
        <h1 className={styles.title}>TATARHUB</h1>
        <a href="/register"><button type="button" className="btn btn-success">Я ИЗУЧАЮ ТАТАРСКИЙ ЯЗЫК</button></a>
        <a href="/register"><button type="button" className="btn btn-outline-dark">Я НОСИТЕЛЬ ТАТАРСКОГО ЯЗЫКА</button></a>
    </header>
    <main className={styles.text}>
        <div className={styles.left}>
            <h2 className={styles.h2}>Дайте волю своему татарскому</h2>
            <p className={styles.p}>TatarWiki - это ваша платформа для изучения очаровательного татарского языка, полного красоты и мудрости. Погрузитесь в захватывающий процесс обучения великому языку.  </p>
            <p className={styles.p}>Наша команда разработала интерактивный и увлекательный сайт, адаптированный для всех уровней обучения. Приятным бонусом будет общение с экспертами из разных областей научной деятельности, что не только укрепит знания татарского, но и расширит ваш кругозор.  </p>
        </div>
        <div className={styles.right}>
            <img className={styles.symbol1} src={symbol1} alt="image" />
            <img className={styles.symbol2} src={symbol2} alt="image 2" />
        </div>
    </main>
    <div className={styles.faq}>
        <h1 className={styles.faqtitle}>Эксклюзивные инструменты обучения</h1>
        <div className={styles.container}>
            <div className={styles.photo}>   
                <img className={styles.image1} src={image} alt="image 3" />
            </div> 
            <div className={styles.faqtext}>
                <p className={styles.faqsub}>Носители языка </p>
                <p className={styles.faqque}>Беседы на татарском языке. Узнавайте много нового про язык, быт и культуру представителей татарской нации, просто общаясь с носителями. </p>

                <p className={styles.faqsub}>Мультимедийные уроки  </p>
                <p className={styles.faqque}>Обменивайтесь опытом, отправляя видео- и аудиофайлы. Познайте великий татарский всеми органами чувств: от запаха блюд национальной кухни до ручных работ татарских мастеров… </p>

                <p className={styles.faqsub}>Личный прогресс </p>
                <p className={styles.faqque}>Отслеживайте свое продвижение с помощью персонализированной аналитики. Переходите на более сложный уровень, и, в конце, станьте носителем языка и неотъемлемой частью татарской культуры.</p>
            </div>
        </div>
    </div>
    <footer className={styles.footer}>
        <img className={styles.footerimg} src={image3} alt="image3" />
        <p className={styles.footertext}>© 2023 TatarHub For KazanDigitalLegends by "Хакатон 2023"</p>
    </footer>
  </div>
);

export default Main;
