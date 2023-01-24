import React from 'react';

const App = () => {
  return (
    <div>
      <Button sayHello="1" />
      <Button sayHello="2" />
      <Button sayHello="3" />
    </div>
  );
};

const Button = (props) => {
  const {sayHello} = props;
  return (
    <button 
      style={{ 
        width: "100px", 
        height: "100px",
        color: "black",
        fontSize: 30,
      }}
      type="submit">{sayHello}
    </button>
  );
};

export default App;
