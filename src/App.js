import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const CalculatorWrapper = styled.div`
  background: white;
  border-radius: 10px;
  min-width: 320px;
  height: auto;
  padding: 10px 0;
`;

const Display = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 15px 30px;
  font-size: 22pt;
  border-bottom: 1px solid #f3f3f3;
`;

const SecondaryDisplay = styled(Display)`
  font-size: 12pt;
  padding: 0 30px;
  color: #494949;
  min-height: 20px;
  border: none;
`;

const KeyboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

class App extends PureComponent {
  state = {
    displayValue: '0',
    secondaryDisplayValue: '',
    inOperation: false,
  };

  handleButtonClick = (buttonValue, role) => {
    const { displayValue, secondaryDisplayValue, inOperation } = this.state;
    let newState = { ...this.state };

    if (role === 'clear' && buttonValue === 'AC') {
      // All clear
      newState = { displayValue: '0', secondaryDisplayValue: '' };
    } else if (role === 'clear' && buttonValue === 'CE') {
      // Clear entry
      newState = { displayValue: '0' };
    } else if (role === 'operation' && buttonValue === '=') {
      // Equals
      const finalValue = eval(`${secondaryDisplayValue} ${displayValue}`);

      newState = {
        displayValue: isNaN(finalValue) ? 'Result is undefined' : finalValue,
        secondaryDisplayValue: '',
        inOperation: true,
      };
    } else if (role === 'operation') {
      // Operations
      let newSecondaryValue = '';
      if (secondaryDisplayValue) {
        newSecondaryValue = `${secondaryDisplayValue} ${displayValue} ${buttonValue}`;
      } else {
        newSecondaryValue = `${displayValue} ${buttonValue}`;
      }

      newState = {
        secondaryDisplayValue: newSecondaryValue,
        inOperation: true,
      };
    } else {
      // Values
      newState = {
        displayValue:
          displayValue === '0' || inOperation
            ? buttonValue
            : `${displayValue}${buttonValue}`,
        inOperation: false,
      };
    }

    return this.setState(newState);
  };

  render() {
    const { displayValue, secondaryDisplayValue } = this.state;
    return (
      <CalculatorWrapper>
        <SecondaryDisplay>{secondaryDisplayValue}</SecondaryDisplay>
        <Display>{displayValue}</Display>
        <KeyboardWrapper>
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="clear"
            value="AC"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="clear"
            value="CE"
          />
          <div />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="operation"
            value="/"
            label="÷"
          />

          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="7"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="8"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="9"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="operation"
            value="*"
            label="×"
          />

          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="4"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="5"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="6"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="operation"
            value="-"
            label="−"
          />

          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="1"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="2"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="3"
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="operation"
            value="+"
          />

          <Button
            value="0"
            handleClick={this.handleButtonClick}
            buttonRole="value"
          />
          <div />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="value"
            value="."
          />
          <Button
            handleClick={this.handleButtonClick}
            buttonRole="operation"
            value="="
          />
        </KeyboardWrapper>
      </CalculatorWrapper>
    );
  }
}

export default App;
