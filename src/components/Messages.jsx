import React from "react";

import styles from "../styles/Messages.module.css";

const Messages = ({ messages, name }) => {
  const helptip = t => {
    // console.log(1)
    t = t.currentTarget
    helptip.v = 0;
    var b = t.children[(t.children.length-1)];
    if (b.style.display == "block") helptipx();
    else {
        helptipx();
        b.style.display = "block";
        helptip.v = 1;
    }
  }

  function helptipx() {
    // console.log(2)
      if (helptip.v===1) {
          helptip.v = 0;
          return;
      }
      var s = document.querySelectorAll("#helptip");
      // console.log(s)
      for (var i=0; i < s.length; i++) {
          s[i].children[(s[i].children.length-1)].style.display = "none";
      }
  }

  return (
    <div className={styles.messages}>
      {messages.map(({ user, message }, i) => {
        const itsMe =
          user.name.trim().toLowerCase() === name.trim().toLowerCase();
        const className = itsMe ? styles.me : styles.user;

        // let request = new XMLHttpRequest();
        // request.open("GET", 'https://translate.tatar/translate?lang=1&text=' + encodeURIComponent(message)) ;
        // request.responseType = "text";
        let translatedText = ''
        // request.onload = function () {
        //   translatedText = request.response;
        // };
        // request.send();

        return (
          <div key={i} className={`${styles.message} ${className}`}>
            <span className={styles.user}>{user.name}</span>

            <div onClick={helptip} id='helptip' className={styles.helptip}><strong>{message}</strong><div className={styles.div} title="Нажмите, чтобы закрыть">{translatedText}</div></div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
