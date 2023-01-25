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

    const calcFontSize = () => {
        let len = (calc.num ? calc.num : calc.res).toString().length;
        if (len > 10) {
            return `${30/len}rem`
        }
        return "3rem";
    }

    // user clicks decimal
    const decimalClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num+value : calc.num,
            font: calcFontSize(),
        })
    }

    // user clicks AC or clear
    const clearClick = () => {
        setCalc({
            sign: "",
            num: 0,
            res: 0,
            font: "3rem"
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
            num: newNum,
            font: calcFontSize(),
        })
    }

    // user clicks on of the operations
    const opClick = () => {
        setCalc({
            sign: value,
            res: calc.num && !calc.res ? calc.num : calc.res,
            num: 0,
            font: calcFontSize(),
        })
    }

    // user clicks equal sign
    const equalClick = () => {
        const calculate = (res,num,sign) => {
            const result = {
                '+': (res,num) => {
                    if (num === "0")
                        return res
                    return res+num;
                },
                '-': (res,num) => res-num,
                'x': (res,num) => res*num,
                '÷': (res,num) => res/num
            }
            return result[sign](res,num);
        }

        setCalc({
            res: calculate(calc.res, calc.num, calc.sign),
            sign: "",
            num: 0,
            font: calcFontSize(),
        })
    }

    // user clicks +/-
    const plusMinusClick = () => {
        setCalc({
            sign: "",
            num: -calc.num,
            res: -calc.res,
            font: calcFontSize(),
        })
    }

    // user clicks %
    const percentClick = () => {
        setCalc({
            sign: "",
            num: calc.num / 100,
            res: calc.res / 100,
            font: calcFontSize(),
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