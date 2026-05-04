import React, { useRef, useState } from 'react'

const Textforms = () => {

    const [text, setText] = useState("Hi, my name is Intiyaj Ansari. I am a BTech student and a frontend developer. I have skills in HTML, CSS, and JavaScript. I enjoy building websites and web applications. I have worked on projects like a Text Analyzer app, a movie ticket booking app, and a portfolio website. I am learning new technologies and improving my skills every day. For more details, you can search my name on Google")


    // timeout store
    const timeRef = useRef(null)

    function handleUpClick() {
        let newText = text.toUpperCase()
        setText(newText)
    }
    function handleLoClick() {
        let newText = text.toLowerCase()
        setText(newText)
    }

    function handleClear() {
        setText("");

        // old timeout clear
        clearTimeout(timeRef.current)

        timeRef.current = setTimeout(() => {
            setText("Kuchh to type karo yaar 😀😀😀 xyz.......");

            timeRef.current = setTimeout(() => {
                setText("Hi, my name is Intiyaj Ansari. I am a BTech student and a frontend developer. I have skills in HTML, CSS, and JavaScript. I enjoy building websites and web applications. I have worked on projects like a Text Analyzer app, a movie ticket booking app, and a portfolio website. I am learning new technologies and improving my skills every day. For more details, you can search my name on Google");
            }, 5000);

        }, 3000);
    }
    function handleCopy() {
        navigator.clipboard.writeText(text)
        alert("Text copied successfully 👍")
    }


    function handleExtraSpace() {
        let newText = text.split(/\s+/).join(" ")
        setText(newText.trim())

    }

    function handleTitleCase() {
        let newText = text
            .toLowerCase()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        setText(newText);
    }
    const handleOnChange = (e) => {
        setText(e.target.value)

        // when type→ timeout cancel
        clearTimeout(timeRef.current)
    }

    return (
        <div className="container my-5 black-shadow ">
            <div className="card shadow-lg p-4 bg-dark-subtle">
                <h3 className="mb-3 text-center">😍 Text Analyzer 😍</h3>
                <div className="mb-3">
                    <h5 className='mb-3'>Enter the text to analyze below</h5>
                    <textarea
                        className="form-control bg-dark-subtle "
                        rows="11"
                        placeholder="Type or paste your text here..."
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
                    <button className="btn btn-outline-secondary" onClick={handleUpClick}>Uppercase</button>
                    <button className="btn btn-outline-secondary" onClick={handleLoClick}>LowerCase</button>
                    <button className="btn btn-outline-secondary" onClick={handleTitleCase}>Captialize</button>
                    <button className="btn btn-outline-secondary" onClick={handleExtraSpace}>Clean Text</button>

                    <button className="btn btn-outline-danger" onClick={handleClear}>Clear</button>
                    <button className="btn btn-outline-success" onClick={handleCopy}>Copy</button>

                </div>
            </div>
        </div>
    )
}

export default Textforms