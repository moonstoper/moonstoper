'use client'
import { useState } from "react";
import "../../css/footer.css";

const Footer = () => {
    const [open, toopen] = useState(false);

    return (<>
        <dialog open={open} onClick={e => toopen(!open)}>
            HI I am dailogue

        </dialog>
        <div>
            Contact

        </div>
        <div>
            
        </div>
        <button onClick={e => { toopen(!open) }}>
            CLICK me
        </button>
    </>)
}

export default Footer;