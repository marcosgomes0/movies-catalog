import styles from "./Image.module.css";

import React from "react";

function Image({ src, title, remove }) {
  const [skull, setSkull] = React.useState(true);
  const [eventTrue, setEventTrue] = React.useState(() => {
    if (remove === false) {
      return false;
    }
    return true;
  });

  function opacityOn({ target }) {
    target.style.opacity = 0.7;
  }
  function opacityOff({ target }) {
    target.style.opacity = 1;
  }

  function handleLoad({ target }) {
    setSkull(false);
    target.style.opacity = 1;
    if (eventTrue) {
      target.addEventListener("mouseover", opacityOn);
      target.addEventListener("mouseout", opacityOff);
    }
  }

  return (
    <div className={styles.wrapper}>
      {skull && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} src={src} alt={title} />
    </div>
  );
}

export default Image;
