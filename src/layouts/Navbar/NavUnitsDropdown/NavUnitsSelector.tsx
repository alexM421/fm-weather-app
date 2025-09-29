//CSS
import styles from "./NavUnitsDropdown.module.css"

type NavUnitsSelectorType = {
    showOptions: boolean,
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
    ref: React.RefObject<HTMLButtonElement | null>
}

export default function NavUnitsSelector ({ showOptions, setShowOptions, ref }: NavUnitsSelectorType) {

    console.log(showOptions)

    return(
        <button 
            className={styles["nav-units-selector"]} ref={ref}
            onClick={() => setShowOptions(prevValue => !prevValue)}
        >
            <img src="/icon-units.svg"/>
            <p className="text-preset-7">Units</p>
            <img 
                className={showOptions? styles["down"]:""}
                src="/icon-dropdown.svg"
            />
        </button>
    )
}