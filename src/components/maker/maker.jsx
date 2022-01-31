import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "wonjun",
      company: "kakao",
      theme: "dark",
      title: "software Engineer",
      email: "ellie@gmail.com",
      message: "Cheer up",
      fileName: "wonjun",
      fileURL: null,
    },
    {
      id: "2",
      name: "wonjun2",
      company: "kakao",
      theme: "light",
      title: "software Engineer",
      email: "ellie@gmail.com",
      message: "Cheer up",
      fileName: "wonjun",
      fileURL: "wonjun.png",
    },
    {
      id: "3",
      name: "wonjun3",
      company: "kakao",
      theme: "colorful",
      title: "software Engineer",
      email: "ellie@gmail.com",
      message: "Cheer up",
      fileName: "wonjun",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
