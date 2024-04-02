import circle from '../../assets/circle.png'
import wrong from '../../assets/wrong.png'
import tick from '../../assets/tick.png'
import React, { useState } from 'react'

import "./TableStructure.css"

export default function TableStructure() {
    const[x,setX]=useState(500);
    const handleUpClick=()=>{
        setX(prevX=>prevX+1);
    }
    const handleDownClick = () =>{
        if (x>0){
            setX(prevX => prevX -1)
        }
    };
    const[x2,setX2]=useState(50);
    const handleUpClick2=()=>{
        setX2(prevX2 => prevX2+1);
    }
    const handleDownClick2 = () =>{
        if (x2>0){
            setX2(prevX2 => prevX2 -1)
        }
    };
    const[x3,setX3]=useState(50);
    const handleUpClick3=()=>{
        setX3(prevX3 => prevX3+1);
    }
    const handleDownClick3 = () =>{
        if (x3>0){
            setX3(prevX3 => prevX3 -1)
        }
    };
    
    return (
        <>
            <div class="upper"><table class="table">
                
                <tbody>
                    <tr class="drow">
                        <td  id="col">
                            <div class="input-group abtn">
                                <input type="text" class="form-control d" aria-label="Text input with dropdown button"/>
                                    <button class="btn btn-primary dropdown-toggle e" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                            </div>

                            
                        </td>
                         <td  class="f"><input type="text" value={`${x} ml`} class="text" ></input></td>
                        <td class="up"><button class="dbtn" onClick={handleUpClick}></button></td>
                        <td class="down"><button class="dbtn" onClick={handleDownClick}></button></td>
                        <td class="myimg"><img class="h" src={wrong}height="13px"></img></td>
                    </tr>

                    <tr class="drow">
                        <td class="y"><span class="w"> The patient is allergic to the component....</span></td>
                    </tr>


                    <tr class="drow">
                        <td id="col">
                            <div class="input-group abtn">
                                <input type="text" class="form-control d" aria-label="Text input with dropdown button" />
                                <button class="btn btn-primary dropdown-toggle e" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>


                        </td>
                        <td class="f"><input type="text" value={`${x2} mg`} class="text" ></input></td>
                        <td class="up"><button class="dbtn" onClick={handleUpClick2}></button></td>
                        <td class="down"><button class="dbtn" onClick={handleDownClick2}></button></td>
                        <td class="myimg"><img class="h" src={tick} height="13px"></img></td>
                    </tr>

                    <tr class="drow">
                        <td class="y"><span class="w2"> All good  ! According to the patients............</span></td>
                    </tr>

                    <tr class="drow">
                        <td id="col">
                            <div class="input-group abtn">
                                <input type="text" class="form-control d" aria-label="Text input with dropdown button" />
                                <button class="btn btn-primary dropdown-toggle e" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>


                        </td>
                        <td class="f"><input type="text" value={`${x3} mg`}  class="text" ></input></td>
                        <td class="up"><button class="dbtn" onClick={handleUpClick3}></button></td>
                        <td class="down"><button class="dbtn" onClick={handleDownClick3}></button></td>
                        <td class="myimg"><img class="h" src={tick} height="13px"></img></td>
                    </tr>

                    <tr class="drow">
                        <td class="y"><span class="w2">  All good  ! According to the patients............</span></td>
                    </tr>






                    
                </tbody>
            </table>

















            </div>
            <div class="lower"> <img  class="img" src={circle} align="right" height="37px" width="37px" ></img></div>
        </>

    )
}





















