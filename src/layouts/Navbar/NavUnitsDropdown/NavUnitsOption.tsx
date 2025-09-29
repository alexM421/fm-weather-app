//CSS
import styles from "./NavUnitsDropdown.module.css"

type NavUnitsOption = {
    legend: string,
    options: string[],
    value: string,
    onClickHandler: (selectedUnit: string) => void,
}

export default function NavUnitsOption ({ legend, options, value, onClickHandler }:NavUnitsOption) {



    return(
        <div className={styles["nav-units-option"]}>
            <h2 className="text-preset-8">{legend}</h2>
            <div className={styles["nav-units-option-content"]}>
                {options.map(option => 
                    <button
                        key={`option-${option.split(" ")[0].toLowerCase()}`}
                        onClick={() => onClickHandler(option)}
                        className={value===option? styles["nav-units-option-selected"]:""}
                    >
                        <p className="text-preset-7">{option}</p>
                        <img 
                            src="/icon-checkmark.svg"
                            style={{opacity: value===option? "1":"0"}}
                        />
                    </button>
                )}
            </div>
        </div>
    )
}