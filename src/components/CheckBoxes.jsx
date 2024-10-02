import { useState } from "react";

export default function CheckBox1({ handleClick }) {


    return (
        <ul>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="swimming"
                        onClick={() => handleClick('swimming')} />
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spend-time" 
                        type="checkbox" 
                        value="bathing"
                        onClick={() => handleClick('bathing')} />
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spend-time" 
                        type="checkbox" 
                        value="chatting"
                        onClick={() => handleClick('chatting')} />
                    Chatting
                </label>
            </li>
            <li>
                <label>
                    <input 
                        name="spend-time" 
                        type="checkbox" 
                        value="noTime"
                        onClick={() => handleClick('noTime')} />
                    No Time
                </label>
            </li>
        </ul>
    );
}