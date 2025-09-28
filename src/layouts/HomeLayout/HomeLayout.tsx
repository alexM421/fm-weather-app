//CSS
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import styles from "./HomeLayout.module.css"

export default function HomeLayout () {

    return(
        <div className={styles["home-layout"]}>
            <Navbar/>
            <Outlet/>
        </div>
    )
}