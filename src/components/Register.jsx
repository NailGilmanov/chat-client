import React from "react";

import styles from "../styles/Register.module.css";

const Register = () => {
  let server_ip = "localhost:5000"
  
  function request_data(method, success, fail = () => {}) {
      const request = new XMLHttpRequest();
      request.onload = function() {
          if (request.status === 200) {
              let d = String(request.response)
              console.log(d)
              success(JSON.parse(d))
          } else {
              fail()
          }
      }
      request.open("GET", server_ip+method, true);
      request.send();
  }
  

    const registerF = () => {
      // request_data(`register/${username.value}/${password.value}/${native.value}/${interesting.value}`, (d) => {
      //   console.log(d)
      // })
    };

    return (
    <div id="auth-block" className={styles.authblock}>
      <div className={styles.wrapper}>
          <h1 className={styles.h1}>Регистрация</h1>
          <input className={styles.textarea} type="text" placeholder="Имя пользователя" id="username" />
          <input className={styles.textarea} type="text" placeholder="Пароль" id="password" />
          <input className={styles.textarea} type="text" placeholder="Повторите пароль" id="password_insurance" />
          <div id="jumbo-button-register"  className={styles.regbtn} onClick={registerF}>
            <a className={styles.link} href='/menu'>
              Регистрация
            </a>
          </div>
      </div>
    </div>
    )
};

export default Register;
