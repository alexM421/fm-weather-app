//CSS
import styles from "./Navbar.module.css"
import NavUnitsDropdown from "./NavUnitsDropdown/NavUnitsDropdown"

export default function Navbar() {


    return(
         <div className={styles.navbar}>
            <img src="/logo.svg"/>
            <NavUnitsDropdown/>
         </div>
    )
}