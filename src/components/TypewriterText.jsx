import { useEffect, useState } from 'react';

export default function TypewriterText({
  texts,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseTime = 1600,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            currentText.slice(
              0,
              displayedText.length + 1,
            ),
          );
        }, typingSpeed);
      }
      else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }
    else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(
            currentText.slice(
              0,
              displayedText.length - 1,
            ),
          );
        }, deletingSpeed);
      }
      else {
        setIsDeleting(false);

        setTextIndex(
          (currentIndex) =>
            (currentIndex + 1) % texts.length,
        );
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="typewriter">
      <span className="typewriter__text">
        {displayedText}
      </span>

      <span
        className="typewriter__cursor"
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}