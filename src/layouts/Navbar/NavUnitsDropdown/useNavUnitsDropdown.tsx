//React
import { useRef, useState } from "react"
//hooks
import useHandleClickOutside from "../../../hooks/useHandleClickOutside"

export type UnitsObject = {
    temperature: string,
    windspeed: string,
    precipitation: string,
}


export default function useNavUnitsDropdown () {

    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [selectedUnits, setSelectedUnits] = useState<UnitsObject>({
        temperature: "Celsius (°C)",
        windspeed: "km/h",
        precipitation: "millimeters (mm)"
    })

    const selectorRef = useRef<HTMLButtonElement>(null)
    const optionsRef = useRef<HTMLDivElement>(null)

    useHandleClickOutside([selectorRef, optionsRef], () => setShowOptions(false))

    return {
        showOptions, setShowOptions,
        selectedUnits, setSelectedUnits,
        selectorRef, optionsRef
    }
}