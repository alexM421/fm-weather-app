//CSS
import styles from "./NavUnitsDropdown.module.css"
//Nav
import NavUnitsOptions from "./NavUnitsOptions"
import NavUnitsSelector from "./NavUnitsSelector"
import useNavUnitsDropdown from "./useNavUnitsDropdown"


export default function NavUnitsDropdown () {

    const {
        showOptions, setShowOptions,
        selectedUnits, setSelectedUnits,
        selectorRef, optionsRef
    } = useNavUnitsDropdown()


    return(
        <div className={styles["nav-units-dropdown"]}>
            <NavUnitsSelector 
                showOptions={showOptions}
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