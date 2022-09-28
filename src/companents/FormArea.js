import { useState } from 'react'
import ButtonArea from './ButtonArea'
import { useDispatch } from "react-redux"
import { addNote } from '../redux/NoteSlice'
import { nanoid } from "@reduxjs/toolkit"
function FormArea() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    let inpt = document.querySelectorAll("input[type=radio]");
    function handleColor(e) {
        setColor(e.target.value);

    }
    function handleSubmit(e) {
        e.preventDefault();
        if (name && color) {
            dispatch(addNote({ name: name, id: nanoid(), inside: "boş", isDone: false, color: color }))
        } else if (name) {
            alert("Renk Seçimi Yapınız")
        } else if (color) {
            alert("Not Name Write")
        } else {
            alert("renk ve isim seçiniz lütfen")
        }
        setName("");
        setColor("")
        e.target.firstChild.value = "";
        inpt.forEach(i => i.checked = false);

    }
    return (
        <div className='w-75 bg-white m-auto h-25 border border-2' id='box'>
            <form onSubmit={handleSubmit}>
                <input type="text" className='d-block w-100 mb-5 formArea fw-bolder ps-3' placeholder='Enter your note here...' onChange={(e) => setName(e.target.value)} />
                <div className='d-flex justify-content-between px-5 pb-3'>
                    <div id='ColorArea'>
                        <input type="radio" value="red" name="color" id='redCol' onChange={handleColor} />
                        <label htmlFor='redCol' id='redColNew'></label>
                        <input type="radio" value="purple" name="color" id='purpleCol' onChange={handleColor} />
                        <label htmlFor='purpleCol' id='purpleColNew'></label>
                        <input type="radio" value="yellow" name="color" id='yellowCol' onChange={handleColor} />
                        <label htmlFor='yellowCol' id='yellowColNew'></label>
                        <input type="radio" value="blue" name="color" id='blueCol' onChange={handleColor} />
                        <label htmlFor='blueCol' id='blueColNew'></label>
                        <input type="radio" value="green" name="color" id='greenCol' onChange={handleColor} />
                        <label htmlFor='greenCol' id='greenColNew'></label>
                    </div >
                    <ButtonArea />
                </div>

            </form>
        </div>
    )
}

export default FormArea