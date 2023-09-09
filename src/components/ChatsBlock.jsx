import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/ChatsBlock.module.css";

import profileImage from '../images/profile_image.png';

const FIELDS = {
  NAME: "name",
  ROOM: "room",
};

const username = 'Nailka2027'
const chatss = [ 'user1' ]
// const chatss = [ 'user1', 'user2', 'user3', 'user4' ]

const roomsChats = {
  "user1": "1",
  "user2": "2",
  "user3": "3",
  "user4": "4",
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

  return (
    <div className={styles.wrap}>
      <div className={styles.container1}>
        <h1 className={styles.heading}>Люди с похожими интересами</h1>

        { chatsHtml }

        </div>
      </div>
    );
  };

  export default ChatsBlock;
