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
    if (btn in className) {
        return className[btn];
    }
    return 'numbers';
};

const Button = ({value}) => {
    return (
      <button className={`${getStyleName(value)} button`}> {value} </button>
    );
};
export default Button;