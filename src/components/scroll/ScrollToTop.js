import React, { useEffect, useState } from 'react'
import { IoIosArrowDropup } from 'react-icons/io'
import styles from '../styles/ScrollToTop.module.css'
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    const handleClick = () => {
        console.log('scroll to top');
        scrollToTop();
    }
    const toggleVisibility = () =>{
        if(window.scrollY > 400) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        //clean up
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const container = {
        width: "10%",
        height: "10%",
        position: 'fixed',
        bottom: ".25em",
        right: ".25em",
        zIndex: '99',
        color: "grey",
        visibility: `${isVisible ? 'visible' : 'hidden'}`
    }
    return (
    <div style={container}
    className={styles.scrollToTop}>
        <button
        onClick={handleClick}
        className={styles.scrollIcon}
        >
            <IoIosArrowDropup className={styles.scrollIcon}>
            </IoIosArrowDropup>
        </button>
    </div>
    )
}
export default ScrollToTop;