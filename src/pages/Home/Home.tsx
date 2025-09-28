//CSS
import styles from "./Home.module.css"

export default function Home () {

    return(
        <div className={styles.home}>
            <h1 className="text-preset-2">How's the sky looking today</h1>
            <div className={styles["home-main"]}>
                {/*searchbar*/}
                {/*weather*/}
            </div>
        </div>
    )
}