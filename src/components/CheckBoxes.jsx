import { useState } from "react";

export default function CheckBox1({ handleChange }) {


    return (
        <ul>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="swimming"
                        onChange={handleChange} />
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spend-time" 
                        type="checkbox" 
                        value="bathing"
                        onChange={handleChange} />
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spend-time" 
                        type="checkbox" 
                        value="chatting"
                        onChange={ handleChange} />
                    Chatting
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spend-time" 
                        type="checkbox" 
                        value="noTime"
                        onChange={handleChange} />
                    No Time
                </label>
            </li>
        </ul>
    );
}