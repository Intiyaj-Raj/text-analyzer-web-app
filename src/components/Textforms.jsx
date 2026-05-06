import React, { useRef, useState } from 'react'

const Textforms = (props) => {

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
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const chars = text.trim().length;

    return (
        <div className='my-5'>
            <div className={"container py-5 black-shadow"}>
                <div className={`card shadow-lg p-4 bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="mb-4 text-center w-100">
                            😍 Text Analyzer 😍
                        </h2>
                    </div>
                    <div className="mb-3" >
                        <h4 className='mb-4 text-center'>Paste or type any text to get word count, character stats, reading <br /> time, and more — instantly.
                        </h4>
                        <textarea
                            className={`form-control border border-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "light" ? "light" : "secondary"} bg-opacity-75`}
                            rows="11"
                            placeholder="Type or paste your text here..."
                            value={text}

                            onChange={handleOnChange}
                        ></textarea>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
                        <button className="btn btn-outline-secondary" onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className="btn btn-outline-secondary" onClick={handleLoClick}>Convert to LowerCase</button>
                        <button className="btn btn-outline-secondary" onClick={handleTitleCase}>Convert to Captialize</button>
                        <button className="btn btn-outline-secondary" onClick={handleExtraSpace}>Clean Text</button>

                        <button className="btn btn-outline-danger" onClick={handleClear}>Clear Text</button>
                        <button className="btn btn-outline-success" onClick={handleCopy}>Copy Text</button>
                    </div>
                </div>
            </div>

            {/* text previewer */}
            <div className='container'>
                <div className={`p-5 rounded text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                    <h3>Your Text Summary</h3>
                    <p className='fw-bold m-0 p-0 text-info'>{words} words and {chars} Characters</p>
                    <p className='fw-bold m-0 p-0 text-info'>{0.008 * words} Minutes Read Time</p>
                    <h3 className={`mb-3 text-center underline text-${props.mode === "light" ? 'dark' : 'light'}`}>Text Preview</h3>
                    <div className={`card-shadow p-4 rounded border border-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "light" ? "light" : "secondary"} bg-opacity-75`} style={{ textAlign: "justify" }}>
                        <p >{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Textforms