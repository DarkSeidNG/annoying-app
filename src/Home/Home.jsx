import React, { useEffect, lazy, useState } from "react";
import { annoyingMessages } from "../utils/annoying-messages";
import home from "./Home.module.css";

const AnnoyingButton = lazy(() => import("./components/AnnoyingButton"));
const AnnoyingInput = lazy(() => import("./components/AnnoyingInput"));
const AnnoyingConfirmationModal = lazy(() =>
  import("./components/AnnoyingConfirmationModal")
);

function Home() {
  const [message, setMessage] = useState("");
  const [canCloseModal, setCanCloseModal] = useState(true);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [annoyingQuestions, setAnnoyingQuestions] = useState(null);

  useEffect(() => {
    setAnnoyingQuestions(annoyingMessages());
  }, []);

  const showAnnoyingMessage = () => {
    const annoyingQuestion = annoyingQuestions.next().value;
    if (annoyingQuestion) {
      setMessage(annoyingQuestion);
      setShowModal(true);
    } else {
      complete();
    }
  };

  const complete = () => {
    setShowModal(true);
    setCanCloseModal(false);
    setMessage(
      "Everything is Ok, you can leave now, and please do not come back!"
    );
  };

  return (
    <div className={home.container}>
      <div className={home.content}>
        <h1 className={home.title}>Annoying app</h1>
        <p className={home.description}>
          Let's get you super pissed, and if this is not annoying enough, well
          maybe you're the problem
        </p>
        <AnnoyingInput
          type="text"
          placeholder="Enter your name"
          onInput={setName}
        />
        <AnnoyingConfirmationModal
          message={message}
          showModal={showModal}
          closeModal={setShowModal}
          canClose={canCloseModal}
        />
        <AnnoyingButton disabled={!name} onClick={showAnnoyingMessage}>
          Proceed
        </AnnoyingButton>
      </div>
    </div>
  );
}

export default Home;
