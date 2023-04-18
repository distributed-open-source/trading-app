import React, {useEffect, useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';

import {motion, AnimatePresence} from 'framer-motion';
import styles from '../styles/Home.module.css';

const scrollVariants = {
  initial: {y: '.5rem', opacity: 0},

  animate: {
    y: '0rem',

    opacity: 1,

    transition: {
      duration: 0.5
    }
  }
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance

  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0

  // make scrolling smooth

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: 'smooth'
    });
  };

  // the scroll event fires when the document view has been scrolled

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.scrollToTops}
          onClick={scrollToTop}
          variants={scrollVariants}
          initial="initial"
          animate="animate"
          exit="initial">
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
