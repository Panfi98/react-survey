import { useState } from "react";
import CheckBox1 from "./CheckBoxes";
import RadioButtons from "./RadioButtons";

export default function Form({ handleSubmit }) {

    const [formData1, setformData1] = useState({
        //checkbox data
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false
    })

    const [formData2, setFormData2] = useState() //radiobox data
    const [formData3, setFormData3] = useState(""); // review data
    const [username, setUsername] = useState(""); // username data
    const [email, setEmail] = useState(""); // email data


    const submit = (event) => {
        event.preventDefault()
        handleSubmit(formData1)
    }

    const handleRadioChange = (event) => {
        const value = event.target.value;
        //console.log(value)
        setFormData2(value)
    }

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "review":
                setFormData3(value);
                break;
            case "username":
                setUsername(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                break;
        }
    };

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        //console.log(name, value, checked)
        switch (value) {
            case 'swimming':
                setformData1({ ...formData1, swimming: !formData1.swimming });
                break;
            case 'bathing':
                setformData1({ ...formData1, bathing: !formData1.bathing });
                break;
            case 'chatting':
                setformData1({ ...formData1, chatting: !formData1.chatting });
                break;
            case 'noTime':
                setformData1({ ...formData1, noTime: !formData1.noTime });
                break;
        }
    }



    return (
        <form onSubmit={submit} className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons handleRadioChange={handleRadioChange} />
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBox1 handleChange={handleChange} />
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    value={formData3}
                    onChange={handleTextChange}
                ></textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleTextChange}
                />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleTextChange}
                />
            </label>
            <input
                className="form__submit"
                type="submit"
                value="Submit Survey!"
            />

        </form>
    )

}