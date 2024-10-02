import { useState } from "react";
import CheckBox from "./CheckBoxes";
import CheckBox1 from "./CheckBoxes";

export default function Form() {
    const [checkBox1, setCheckBox1] = useState({
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false
    })

    const checkResult = (event) => {
        event.preventDefault(); 
        for (let key in checkBox1) {
            console.log(key + ':' + checkBox1[key])
        }
    }

    const handleClick = (box) => {
        switch (box) {
            case 'swimming':
                setCheckBox1({ ...checkBox1, swimming: !checkBox1.swimming });
                break;
            case 'bathing':
                setCheckBox1({ ...checkBox1, bathing: !checkBox1.bathing });
                break;
            case 'chatting':
                setCheckBox1({ ...checkBox1, chatting: !checkBox1.chatting });
                break;
            case 'noTime':
                setCheckBox1({ ...checkBox1, noTime: !checkBox1.noTime });
                break;
        }
        console.log(box)
    }



    return (
        <form className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>

            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBox1 handleClick={handleClick} />
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10">
                </textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username" />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email" />
            </label>
            <input
                className="form__submit"
                type="submit"
                value="Submit Survey!"
                onClick={()=>{checkResult()}} />
            
        </form>
    )

}