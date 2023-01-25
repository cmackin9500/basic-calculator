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

    // user clicks decimal
    const decimalClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num+value : calc.num
        })
    }

    // user clicks AC or clear
    const clearClick = () => {
        setCalc({
            sign: "",
            num: 0,
            res: 0
        })
    }

    // user clicks number
    const numClick = () => {
        let tempNum = value.toString();
        let newNum;
        if (tempNum === "0" && calc.num === 0)
            newNum = "0";
        else
            newNum = Number(calc.num + tempNum);

        setCalc({
            ...calc,
            num: newNum
        })
    }

    // user clicks on of the operations
    const opClick = () => {
        setCalc({
            sign: value,
            res: calc.num && !calc.res ? calc.num : calc.res,
            num: 0
        })
    }

    // user clicks equal sign
    const equalClick = () => {
        const calculate = (res,num,sign) => {
            const result = {
                '+': (res,num) => res+num,
                '-': (res,num) => res-num,
                'x': (res,num) => res*num,
                '÷': (res,num) => res/num
            }
            return result[sign](res,num);
        }

        setCalc({
            res: calculate(calc.res, calc.num, calc.sign),
            sign: "",
            num: 0
        })
    }

    // user clicks +/-
    const plusMinusClick = () => {
        setCalc({
            sign: "",
            num: -calc.num,
            res: -calc.res
        })
    }

    // user clicks %
    const percentClick = () => {
        setCalc({
            sign: "",
            num: calc.num / 100,
            res: calc.res / 100
        })
    }

    const handleButtonClick = () => {
        const results = {
            '.': decimalClick,
            'AC': clearClick,
            '÷': opClick,
            'x': opClick,
            '+': opClick,
            '-': opClick,
            '=': equalClick,
            '+/-': plusMinusClick,
            '%': percentClick,
        }
        return value in results ? results[value]() : numClick()
    }

    return (
      <button onClick={handleButtonClick} className={`${getStyleName(value)} button`}> {value} </button>
    );
};
export default Button;