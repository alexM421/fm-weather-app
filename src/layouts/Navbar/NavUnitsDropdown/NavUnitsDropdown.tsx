//CSS
import styles from "./NavUnitsDropdown.module.css"
//Nav
import NavUnitsOptions from "./NavUnitsOptions"
import NavUnitsSelector from "./NavUnitsSelector"


export default function NavUnitsDropdown () {



    return(
        <div className={styles["nav-units-dropdown"]}>
            <NavUnitsSelector 
                setShowOptions={setShowOptions}
                ref={selectorRef}
            />
            <NavUnitsOptions
                showOptions={showOptions}
                setShowOptions={setShowOptions}
                selectedUnits={selectedUnits}
                setSelectedUnits={setSelectedUnits}
                ref={optionsRef}
            />
        </div>
    )
}