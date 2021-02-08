import React from "react";
import styles from "./styles.module.css";
import {useHistory, useLocation} from "react-router-dom";

function MemeGenerated() {
    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    return (
        <div className={styles.container}>
            {url && <img src={url} alt="meme"/>}
            <button onClick={() => history.push('/')} className={styles.home}>
            Make more memes
            </button>
        </div>
    );
}

export default MemeGenerated;