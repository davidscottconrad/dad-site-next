import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import styles from "../../styles/Collapsible.module.css";

function Collapsible({ label, readMoreLink, children }) {
    const [servicesBox, setServicesBox] = useState(false);
    const dropDownRef = useRef()

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    const size = useWindowSize()

    return <div className="col-lg-4" >
        <div className="card m-3"  >
            <div className="card-body " id={styles.breakPoint} onClick={() => setServicesBox(!servicesBox)}>
                <h4 className="card-title mb-3 text-center" id="props">{label}</h4>
            </div>
        </div>
        <div
            className="drop-down"
            id={styles.dropDownParent}
            ref={dropDownRef}
            style={
                servicesBox
                    ? {
                        height: dropDownRef.current.scrollHeight + "px",
                    }
                    : {
                        height: "0px",
                    }
            }
        >
            {size.width <= 767 && <div id={styles.collapsiblepropsSmall}><p>{children}</p> </div>} 
            {size.width > 767 && (<div id={styles.collapsibleprops}>{children}</div>)}

            <div className="frame">
                <Link href={readMoreLink} passHref><a id="button" className="custom-btn btn-7"><span id="button-span">Read More</span></a></Link>
            </div>
        </div>
    </div>

}

export default Collapsible
