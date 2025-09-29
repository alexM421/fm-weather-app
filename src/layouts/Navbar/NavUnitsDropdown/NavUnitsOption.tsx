//CSS
import styles from "./NavUnitsDropdown.module.css"

type NavUnitsOption = {
    legend: string,
    options: string[],
    value: string,
    onClickHandler: (selectedUnit: string) => void,
}

export default function NavUnitsOption ({ legend, options, onClickHandler }:NavUnitsOption) {



    return(
        <div className={styles["nav-units-option"]}>
            <h2 className="text-preset-8">{legend}</h2>
            <div className={styles["nav-units-option-content"]}>
                {options.map(option => 
                    <button
                        key={`option-${option.split(" ")[0].toLowerCase()}`}
                        className="text-preset-7"
                        onClick={() => onClickHandler(option)}
                    >
                        {option}
                    </button>
                )}
            </div>
        </div>
    )
}