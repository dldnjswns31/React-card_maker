import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
