import '../gsap/gsap.min.js';
import MorphSVGPlugin from '../gsap/MorphSVGPlugin.min.js';
import { useEffect, useState } from 'react';
import styles from '../styles/components/pagecurl.module.scss';
import classes from 'classnames';

const PageCurl = ({ image = '', z = '1', title = '', site = '', isMobile }) => {
  const pageTopColor = 'white';
  const pageBottomColor = '#b0d9f0';
  const duration = 0.4;

  const [opened, setOpened] = useState(false);

  const handleHover = (z) => {
    setOpened(true);
    const tl = new TimelineLite();
    tl.to(`#page-closed${z}`, duration, { morphSVG: `#page-open${z}` }, 0)
      .to(
        `#page-closed-shadow${z}`,
        duration,
        { morphSVG: `#page-open-shadow${z}` },
        0
      )
      .to(`#curl-closed${z}`, duration, { morphSVG: `#curl-open${z}` }, 0)
      .to(
        `#curl-closed-shadow${z}`,
        duration,
        { morphSVG: `#curl-open-shadow${z}` },
        0
      );
  };

  const handleLeave = (z) => {
    setOpened(false);
    const tl = new TimelineLite();
    tl.to(`#page-closed${z}`, duration, { morphSVG: `#page-closed${z}` }, 0)
      .to(
        `#page-closed-shadow${z}`,
        duration,
        { morphSVG: `#page-closed-shadow${z}` },
        0
      )
      .to(`#curl-closed${z}`, duration, { morphSVG: `#curl-closed${z}` }, 0)
      .to(
        `#curl-closed-shadow${z}`,
        duration,
        { morphSVG: `#curl-closed-shadow${z}` },
        0
      );
  };

  const mobileTrigger = (entries) => {
    if (entries[0].isIntersecting === true) handleHover(z);
    else handleLeave(z);
  };

  useEffect(() => {
    if (!isMobile) return;

    if (isMobile === 'medium' && z === '4') {
      handleHover(4);
      window.setTimeout(handleLeave, 1500, 4);
      const id = setInterval(() => {
        handleHover(4);
        window.setTimeout(handleLeave, 1500, 4);
      }, 4500);
      return () => clearInterval(id);
    } else if (isMobile === 'small') {
      const options = {
        root: null,
        rootMargin: `${z}px`, // differentiates between observers created on the page
        threshold: 1.0,
      };
      let observer = new IntersectionObserver(mobileTrigger, options);
      let target = document.getElementById(`svg-wrapper${z}`);
      observer.observe(target);
    }
  }, [isMobile]); // call this only when isMobile changes

  return (
    <div
      id={`svg-wrapper${z}`}
      className={styles['svg-wrapper']}
      style={{ zIndex: z }}
      onMouseOver={() => handleHover(z)}
      onMouseOut={() => handleLeave(z)}
    >
      <a className={styles['site-cta']} href={site} target="_blank">
        <div
          className={classes(styles.thumbnail, { [styles.opened]: opened })}
          style={{ backgroundImage: `url(${image})` }}
        />
        <svg
          id="closed-page-paths"
          className={styles.page}
          viewBox="0 0 512 598.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={`page-closed-shadow${z}`}
            className={styles['page-closed-shadow']}
            d="M375.4,598.8l-204.5,0.5L39.1-0.3l336.3-0.5V598.8z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`page-closed${z}`}
            className={styles['page-closed']}
            d="M399.6,598.8l-204.5,0.5L39.1-0.3l360.5-0.5V598.8z"
            style={{ fill: pageBottomColor }}
          />
        </svg>

        <svg
          id="closed-curl-paths"
          className={styles.page}
          viewBox="0 0 512 598.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={`curl-closed-shadow${z}`}
            className={styles['curl-closed-shadow']}
            d="M366.2,470.5c-79,7-141.5,57-171.1,129l-156-600l16.2,0L366.2,470.5z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`curl-closed${z}`}
            className={styles['curl-closed']}
            d="M365.4,455.5c-81-1.8-140.6,72-170.2,144l-156-600l16.2,0L365.4,455.5z"
            style={{ fill: pageTopColor }}
          />
        </svg>

        <svg
          id="open-curl-paths"
          className={styles.page}
          viewBox="0 0 512 598.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={`page-open-shadow${z}`}
            className={styles['page-open-shadow']}
            d="M378.1,602.1L273,603L130,3l248.1-0.9V602.1z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`page-open${z}`}
            className={styles['page-open']}
            d="M400,599H294L125-0.1l275.1-0.4L400,599z"
            style={{ fill: pageBottomColor }}
          />

          <path
            id={`curl-open-shadow${z}`}
            className={styles['curl-open-shadow']}
            d="M513,525c-79,7-189.4,2.1-219,74.5L126-0.5h13.1L513,525z"
            style={{ fill: 'black', opacity: 0.5 }}
          />

          <path
            id={`curl-open${z}`}
            className={styles['curl-open']}
            d="M512,495.9c-81-1.8-188.4,31.9-218,103.6L125-0.5h14L512,495.9z"
            style={{ fill: pageTopColor }}
          />
        </svg>
      </a>
    </div>
  );
};

export default PageCurl;
