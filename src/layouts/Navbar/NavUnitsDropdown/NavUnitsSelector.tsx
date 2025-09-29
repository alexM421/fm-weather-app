//CSS
import styles from "./NavUnitsDropdown.module.css"

type NavUnitsSelectorType = {
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
    ref: React.RefObject<HTMLButtonElement | null>
}

export default function NavUnitsSelector ({ setShowOptions, ref }: NavUnitsSelectorType) {


    return(
        <button 
            className={styles["nav-units-selector"]} ref={ref}
            onClick={() => setShowOptions(prevValue => !prevValue)}
        >
            <img src="/icon-units.svg"/>
            <p className="text-preset-7">Units</p>
            <img src="/icon-dropdown.svg"/>
        </button>
    )
}