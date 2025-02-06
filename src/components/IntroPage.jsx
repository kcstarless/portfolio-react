import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const aboutMeText =
  "Hi, I'm David. I am passionate about learning. I like to build things. I like to solve problems. I like to make a difference.";

const IntroPage = ({ setFirstLoad, slide }) => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(aboutMeText);

  // Split the text by period and space (. ) but keep the period with each sentence
  const splitTextIntoSentences = (text) => {
    // Split by ". " and keep the period as part of each sentence
    const sentences = text.split(/(?<=\.)\s/);
    return sentences;
  };

  const sentences = splitTextIntoSentences(text);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setFirstLoad(false);
    }, 6000);
  }, []);

  return (
    <>
      <div className={`intro-page ${slide ? "slide" : ""}`}>
        <div>
          <AnimatePresence>
            {sentences.map((sentence, sentenceIndex) => (
              <div
                key={sentenceIndex}
                style={{ display: "block", marginBottom: "15px" }}
              >
                {sentence.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                      delay: index * 0.05 + sentenceIndex * 0.5, // Delay based on sentence and letter index
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="letter"
                  >
                    {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
                  </motion.span>
                ))}
                {/* Add a line break after each sentence */}
                <br />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {loading && <div className="loader"></div>}
    </>
  );
};

export default IntroPage;
