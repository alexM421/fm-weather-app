//CSS
import styles from "./NavUnitsDropdown.module.css"
//nav
import NavUnitsOption from "./NavUnitsOption"
//types
import type { UnitsObject } from "./useNavUnitsDropdown"

type NavUnitsOptionsType = {
    showOptions: boolean,
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>,
    selectedUnits: UnitsObject,
    setSelectedUnits: React.Dispatch<React.SetStateAction<UnitsObject>>
    ref: React.RefObject<HTMLDivElement | null>
}

export default function NavUnitsOptions ({ showOptions, setShowOptions, selectedUnits, setSelectedUnits,ref }: NavUnitsOptionsType) {

    const optionsArr = [
        {
            legend: "Temperature",
            options:["Celsius (°C)","Fahrenheit (°F)"],
            category: "temperature"
        },
        {
            legend: "Wind Speed",
            options: ["km/h","mph"],
            category: "windspeed"
        },
        {
            legend: "Precipitation",
            options:["Millimeters (mm)","Inches (in)"],
            category: "precipitation"
        }
    ]

    return(
        <div className={`${styles["nav-units-options"]} ${!showOptions && styles["nav-units-options-hidden"]}`} ref={ref}>
            <h1 className="text-preset-7">Switch to Imperial</h1>
            {optionsArr.map(option => 
                <NavUnitsOption
                    legend={option.legend}
                    options={option.options}
                    value={selectedUnits[option.category as "temperature"|"windspeed"|"precipitation"]}
                    onClickHandler={(selectedUnit) => {
                        setShowOptions(false)
                        setSelectedUnits(prevState => ({...prevState, [option.category]:selectedUnit}))
                    }}
                    key={`nav-unit-option-${option.legend}`}
                />
            )}
        </div>
    )
}