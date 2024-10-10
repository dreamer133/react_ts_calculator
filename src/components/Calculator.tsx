import React, { useState, useEffect } from 'react';
import DigitBtn from './DigitBtn';
import OperationBtn from './OperationBtn';
import ResetBtn from './ResetBtn';
import EqualBtn from './EqualBtn';
import Result from './Result';
import { Operation } from '../types';

export default function Calculator() {
    const [currentValue, setCurrentValue] = useState(0);
    const [argument, setArgument] = useState(0);
    const [operation, setOperation] = useState<Operation|undefined>();
    const [expressionStr, setExpressionStr] = useState('')

    useEffect(() => {
        renderExpression()
    }, [currentValue, argument, operation])

    function doReset() {
        setCurrentValue(0);
        setArgument(0);
        setOperation(undefined);
        setExpressionStr('');
    }

    function handleDigitClick(digit: number) {
        const currentValueStr = currentValue.toString();
        const argumentStr = argument.toString();

        if (operation) {
            setArgument(parseInt((argumentStr === '0' ? '' : argumentStr) + digit) as number);
        } else {
            setCurrentValue(parseInt((currentValueStr === '0' ? '' : currentValueStr) + digit) as number);
        }
    }

    // todo: doCalculate if operation already was set
    function handleOperationClick(operation: Operation) {
        setOperation(operation);
    }

    function renderExpression() {
        setExpressionStr(currentValue.toString()
            + (operation || '')
            + (argument === 0 ? '' : argument.toString())
        );
    }

    // do calculate if currentValue and argument and operation
    function handleEqualClick() {
        if (currentValue && argument && operation) {
            const result = doCalculation();
            setCurrentValue(result);
            setExpressionStr(result.toString());

            setArgument(0);
            setOperation(undefined);
        }
    }

    function doCalculation(): number {
        if (!operation) {
            return 0;
        }

        switch (operation) {
            case '+':
                return currentValue + argument;
            case '-':
                return currentValue - argument;
            case '*':
                return currentValue * argument;
            case '/':
                return currentValue / argument;
        }
    }

    return (
        <>
            <h1 className='caption1'>Very simple Calculator</h1>
            <div className='calc_container'>
                <div className='result_wrapper'>
                    <Result text={expressionStr} />
                </div>
                <div className='buttons_wrapper'>
                    <div className='digit_block'>
                        <div className='item_row'>
                            <DigitBtn num={7} handleDigitClick={() => {handleDigitClick(7)}} />
                            <DigitBtn num={8} handleDigitClick={() => {handleDigitClick(8)}} />
                            <DigitBtn num={9} handleDigitClick={() => {handleDigitClick(9)}} />
                        </div>
                        <div className='item_row'>
                            <DigitBtn num={4} handleDigitClick={() => {handleDigitClick(4)}} />
                            <DigitBtn num={5} handleDigitClick={() => {handleDigitClick(5)}} />
                            <DigitBtn num={6} handleDigitClick={() => {handleDigitClick(6)}} />
                        </div>
                        <div className='item_row'>
                            <DigitBtn num={1} handleDigitClick={() => {handleDigitClick(1)}} />
                            <DigitBtn num={2} handleDigitClick={() => {handleDigitClick(2)}} />
                            <DigitBtn num={3} handleDigitClick={() => {handleDigitClick(3)}} />
                        </div>
                        <div className='item_row'>
                            <ResetBtn doReset={doReset} />
                            <DigitBtn num={0} handleDigitClick={() => {handleDigitClick(0)}} />
                        </div>
                    </div>
                    <div className='operations_block'>
                        <div className='item_row'>
                            <OperationBtn operation={'/'} caption='&divide;' handleOperationClick={handleOperationClick} />
                        </div>
                        <div className='item_row'>
                            <OperationBtn operation={'*'} handleOperationClick={handleOperationClick} />
                        </div>
                        <div className='item_row'>
                            <OperationBtn operation={'-'} handleOperationClick={handleOperationClick} />
                        </div>
                        <div className='item_row'>
                            <OperationBtn operation={'+'} handleOperationClick={handleOperationClick} />
                        </div>
                    </div>
                    <div className='equal_block'>
                        <div className='item_row'>
                            <EqualBtn handleEqualClick={handleEqualClick} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

