import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
    const {calc} = useContext(CalcContext);

    return (
        <div className="screen" style={{ fontSize: calc.font }}> {calc.num ? calc.num : calc.res} </div>
    )
}

export default Screen;