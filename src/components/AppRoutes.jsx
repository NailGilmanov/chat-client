import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import ChatsBlock from "./ChatsBlock";
import Chat from "./Chat";
import Register from "./Register";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/menu" element={<ChatsBlock />}/>
    <Route path="/chat" element={<Chat />} />
    <Route path='/register' element={<Register />}></Route>
  </Routes>
);

export default AppRoutes;
