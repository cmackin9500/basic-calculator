import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const buttonValues = [
  ['AC','+/-','%','÷'],
  [7,8,9,'x'],
  [4,5,6,'-'],
  [1,2,3,'+'],
  [0,'.','=']
];

const App = () => {

  return (
    <div>
      <Wrapper>
        <Screen/>
          <ButtonBox>
            {buttonValues.flat().map((btn,i)=> (
              <Button
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
      </Wrapper>
    </div>
  );
};

/*
const renderButtons = () => {
  const views = [];
  views.push(<Screen/>);
  views.push(<br></br>);
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      views.push(<Button num={i*3+j+1}/>);
    }
    views.push(<br></br>);
  }
  console.log("hi")
  return views;
}

const Screen = () => {
  const style = {
    width: "300px", 
    height: "100px",
    color: "black",
    border: "2px solid black",
    fontSize: 30,
  }
  return (
    <display 
      style={style}
      id="display"
      type="text">
        Hello
    </display>
  );
}

const Button = (props) => {
  const {num} = props;
  const style = {
    width: "100px", 
    height: "100px",
    color: "black",
    fontSize: 30,
  }

  return (
    <button 
      style={style}
      id={num}
      type="submit">{num}
    </button>
  );
};
*/

export default App;
