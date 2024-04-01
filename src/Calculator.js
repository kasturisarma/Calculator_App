import "./Calculator.css"
import React, { useState } from "react";


function Calculator()
{
    let [data, setData] = useState("");

    let addtoscrn = (value) =>
    {
        setData(data+value)
    } 

    let ac = () =>
    {
        setData("")
    }


    let equal = () =>
    {
        setData(eval(data))
    }

    let Clear = () =>
    {
        setData(data.slice(0,data.length-1))
    }
    
    return (
        <>
        <center>
            <table >
                <tr>
                    <td colSpan={4}>
                        <input type="text" placeholder="0" value={data} id="scrn" />
                    </td>
                </tr>

                <tr>
                    <td><button id="ac"  onClick={ac}>AC</button></td>
                    <td><button id="ce" onClick={Clear}>CE</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('/')}}>/</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('%')}}>%</button></td>
                </tr>

                <tr>
                    <td><button className="x" onClick={()=>{addtoscrn('1')}}>1</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('2')}}>2</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('3')}}>3</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('+')}}>+</button></td>
                </tr>

                <tr>
                    <td><button className="x" onClick={()=>{addtoscrn('4')}}>4</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('5')}}>5</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('6')}}>6</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('-')}}>-</button></td>
                </tr>

                <tr>
                    <td><button className="x" onClick={()=>{addtoscrn('7')}}>7</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('8')}}>8</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('9')}}>9</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('*')}}>*</button></td>
                </tr>

                <tr>
                    <td><button className="x" onClick={()=>{addtoscrn('0')}}>0</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('00')}}>00</button></td>
                    <td><button className="x" onClick={()=>{addtoscrn('.')}}>.</button></td>
                    <td><button id="eq" onClick={equal}>=</button></td>
                </tr>
            </table>
            </center>
        </>
    )
}

export default Calculator