import React from "react";

import styles from "../styles/Register.module.css";

let username = ''

let flag = true

const registerF = () => {
  if (flag) {
    username = document.getElementById('username').value
    localStorage.setItem('name', username)
    console.log(username)
    flag = false
  }
};

const Register = () => {

    return (
    <div id="auth-block" className={styles.authblock}>
      <div className={styles.wrapper}>
          <h1 className={styles.h1}>Регистрация</h1>
          <input className={styles.textarea} type="text" placeholder="Имя пользователя" id="username" />
          <input className={styles.textarea} type="text" placeholder="Пароль" id="password" />
          <input className={styles.textarea} type="text" placeholder="Повторите пароль" />
          <input className={styles.textarea} type="text" placeholder="Укажите ваши интересы" id="password_insurance" />
          <div id="jumbo-button-register"  className={styles.regbtn} onClick={registerF}>
            <a className={styles.link} href="/menu">
              Регистрация
            </a>
          </div>
      </div>
    </div>
    )
};

export { Register }
