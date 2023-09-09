import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/ChatsBlock.module.css";

import image3 from '../images/image3.png';

import profileImage from '../images/profile_image.png';

let username = localStorage.getItem('name')

console.log(username)

const FIELDS = {
  NAME: "name",
  ROOM: "room",
};
// const chatss = [ 'user1']
const chatss = [ 'SonoValery', 'Bogdan', 'Ярослав', 'user4' ]

const roomsChats = {
  "SonoValery": "1",
  "Bogdan": "2",
  "Ярослав": "3",
  "user4": "4",
}

const chatss1 = [ 'IT', 'Природа', 'Путишествия', 'Лепка' ]

const roomsChats1 = {
  "IT": "5",
  "Природа": "6",
  "Путишествия": "7",
  "Лепка": "8",
}

const ChatsBlock = () => {
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = useState({ [NAME]: username, [ROOM]: "" });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  // const handleClick = (e) => {
  //   const isDisabled = Object.values(values).some((v) => !v);

  //   if (isDisabled) e.preventDefault();
  // };

  const chatsHtml = chatss.map((chat) => 
    <form key={chat.toString()} className={styles.form}>
      {/* <div className={styles.group}>
        <input
          type="text"
          name="name"
          value={values[NAME]}
          placeholder="Username"
          className={styles.input}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </div> */}
      {/* <div className={styles.group}>
        <input
          type="text"
          name="room"
          placeholder={chat}
          value={values[ROOM]}
          className={styles.input}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </div> */}
      <div className={styles.chatwrap}>
        <img className={styles.profileim} src={profileImage} alt="profile image" />
        <h4 className={styles.chattitle}>{chat}</h4>
      </div>

      <Link
        className={styles.group}
        // onClick={handleClick}
        to={`/chat?name=${values[NAME]}&room=${roomsChats[chat]}`}
      >
        <button type="submit" className={styles.button}>
          Зайди в диалог
        </button>
      </Link>
    </form>
  )

  const gropsHtml = chatss1.map((chat) => 
    <form key={chat.toString()} className={styles.form}>
      {/* <div className={styles.group}>
        <input
          type="text"
          name="name"
          value={values[NAME]}
          placeholder="Username"
          className={styles.input}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </div> */}
      {/* <div className={styles.group}>
        <input
          type="text"
          name="room"
          placeholder={chat}
          value={values[ROOM]}
          className={styles.input}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </div> */}
      <div className={styles.chatwrap}>
        <img className={styles.profileim} src={profileImage} alt="profile image" />
        <h4 className={styles.chattitle}>{chat}</h4>
      </div>

      <Link
        className={styles.group}
        // onClick={handleClick}
        to={`/chat?name=${values[NAME]}&room=${roomsChats1[chat]}`}
      >
        <button type="submit" className={styles.button}>
          Зайди в диалог
        </button>
      </Link>
    </form>
  )

  return (<>
    <div className={styles.wrap}>
      <div className={styles.container1}>
        <h1 className={styles.heading}>Люди с похожими интересами</h1>

        { chatsHtml }
        <br />
        <h1 className={styles.heading}>Сообщества на тему</h1>

        { gropsHtml }
        
        </div>

        
      </div>
      <footer className={styles.footer}>
          <img className={styles.footerimg} src={image3} alt="image3" />
          <p className={styles.footertext}>© 2023 TatarHub For KazanDigitalLegends by "Хакатон 2023"</p>
      </footer></>
    );
  };

  export default ChatsBlock;
