import React, { useState, useEffect } from 'react';
import Digit from './Digit';
import Operation from './Operation';
import Reset from './Reset';
import Equal from './Equal';
import Result from './Result';

export default function Calculator() {
    const [currentValue, setCurrentValue] = useState(0);
    const [argument, setArgument] = useState(0);
    const [operation, setOperation] = useState('');
    const [expressionStr, setExpressionStr] = useState('')

    useEffect(() => {
        renderExpression()
    }, [currentValue, argument, operation])

    function doReset() {
        setCurrentValue(0);
        setArgument(0);
        setOperation('');
        setExpressionStr('');
    }

    function clickDigit(e: React.MouseEvent) {
        const digit = e.currentTarget.textContent;

        const currentValueStr = currentValue.toString();
        const argumentStr = argument.toString();

        if (operation) {
            setArgument(parseInt((argumentStr === '0' ? '' : argumentStr) + digit) as number);
        } else {
            setCurrentValue(parseInt((currentValueStr === '0' ? '' : currentValueStr) + digit) as number);
        }
    }

    // todo: doCalculate if operation already was set
    function clickOperation(operation: string) {
        setOperation(operation);
    }

    function renderExpression() {
        setExpressionStr(currentValue.toString()
            + operation
            + (argument === 0 ? '' : argument.toString())
        );
    }

    // do calculate if currentValue and argument and operation
    function clickEqual(e: React.MouseEvent) {
        if (currentValue && argument && operation) {
            const result = doCalculation();
            setCurrentValue(result);
            setExpressionStr(result.toString());

            setArgument(0);
            setOperation('');
        }
    }

    function doCalculation(): number {
        let ret = 0;

        switch (operation) {
            case '+':
                ret = currentValue + argument;
                break;
            case '-':
                ret = currentValue - argument;
                break;
            case '*':
                ret = currentValue * argument;
                break;
            case '/':
                ret = currentValue / argument;
                break;
            default:
                throw new Error('unknown operation');
        }

        return ret;
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
                            <Digit num={7} clickDigit={clickDigit} />
                            <Digit num={8} clickDigit={clickDigit} />
                            <Digit num={9} clickDigit={clickDigit} />
                        </div>
                        <div className='item_row'>
                            <Digit num={4} clickDigit={clickDigit} />
                            <Digit num={5} clickDigit={clickDigit} />
                            <Digit num={6} clickDigit={clickDigit} />
                        </div>
                        <div className='item_row'>
                            <Digit num={1} clickDigit={clickDigit} />
                            <Digit num={2} clickDigit={clickDigit} />
                            <Digit num={3} clickDigit={clickDigit} />
                        </div>
                        <div className='item_row'>
                            <Reset doReset={doReset} />
                            <Digit num={0} clickDigit={clickDigit} />
                        </div>
                    </div>
                    <div className='operations_block'>
                        <div className='item_row'>
                            <Operation operation={'/'} caption='&divide;' clickOperation={clickOperation} />
                        </div>
                        <div className='item_row'>
                            <Operation operation={'*'} clickOperation={clickOperation} />
                        </div>
                        <div className='item_row'>
                            <Operation operation={'-'} clickOperation={clickOperation} />
                        </div>
                        <div className='item_row'>
                            <Operation operation={'+'} clickOperation={clickOperation} />
                        </div>
                    </div>
                    <div className='equal_block'>
                        <div className='item_row'>
                            <Equal clickEqual={clickEqual} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

