import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Collapsible.module.css"



function Collapsible(props) {
    const [servicesBox, setServicesBox] = useState(false);
    const dropDownRef = useRef()
    
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
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
   
    
if(dropDownRef.current) console.log(dropDownRef.current.scrollHeight)
   


    return <div className="col-lg-4" >

        <div className="card m-3"  >

            <div className="card-body " id={styles.breakPoint} onClick={() => setServicesBox(!servicesBox)}>
                <h4 className="card-title mb-3 text-center" id="props">{props.label}</h4>
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
            {size.width <= 767 && <div id={styles.collapsiblepropsSmall}><p>{props.children}</p> </div> }
            

        {size.width > 767 && (<div id={styles.collapsibleprops}>{props.children}</div>)}
        </div>
    </div>

}

export default Collapsible
//  <p className="card-text">Conrad Eye Centers focuses on your vision with one-on-one personalized eye exams for any age.</p>
//<p className="card-text">Each of our locations has a full service optical boutique. Our optician has years of experience and will work one-on-one with you to find the perfect balance of style, quality, and affordability.</p>
//<p className="card-text">Is your eye red, irritated, scratchy, watery, or painful? Dr. Conrad is your convenient, quick, and knowledgeable answer.</p>
