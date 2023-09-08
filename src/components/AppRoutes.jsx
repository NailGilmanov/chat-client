import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import ChatsBlock from "./ChatsBlock";
import Chat from "./Chat";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/menu" element={<ChatsBlock />}/>
    <Route path="/chat" element={<Chat />} />
  </Routes>
);

export default AppRoutes;
