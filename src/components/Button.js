import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
    const className = {
        '=': 'operations',
        'x': 'operations',
        '÷': 'operations',
        '-': 'operations',
        '+': 'operations', 
        'AC': 'mis',
        '+/-': 'mis',
        '%': 'mis'
    }
    return btn in className ? className[btn] : 'numbers';
};

const Button = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext);

    const decimalClick = () => {
        setCalc({
            ...calc,
            num: 29
        })
    }

    const handleButtonClick = () => {
        const results = {
            '.': decimalClick
        }
        return results[value]();
    }

    return (
      <button onClick={handleButtonClick} className={`${getStyleName(value)} button`}> {value} </button>
    );
};
export default Button;