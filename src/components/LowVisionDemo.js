import "./LowVisionDemo.css"
import React, { useState } from 'react'

function LowVisionDemo() {
    const [fontSize, setFontSize] = useState(18);
    const [width, setWidth] = useState(100);

    const increaseFont = () => {
        if (fontSize < 30) {
            setFontSize(fontSize + 4)
        }
    }

    const decreaseFont = () => {
        if (fontSize > 18) {
            setFontSize(fontSize - 4)
        }
    }

    const zoomIn = () => {
        if (width != 25) {
            setWidth(width - 25)
        }
    }

    const zoomOut = () => {
        if (width != 100) {
            setWidth(width + 25)
        }
    }


    return (
        <>
        <p className='demo-ex'>For example, low vision users might:</p>
        <ul>
            <li><button className="demobutton" onClick={increaseFont}>Increase</button> or <button className="demobutton" onClick={decreaseFont}>Decrease</button> the font size.</li>
            <li><button className="demobutton" onClick={zoomIn}>Zoom in</button> or <button className="demobutton" onClick={zoomOut}>Zoom out</button> on the screen.</li>
        </ul>
        <section className="example good" style={{fontSize: `${fontSize}px`, width: `${width}%`}}>
            <h2 class="label">
                <svg viewBox="0 0 20 20" class="icon-check" aria-hidden="true">
                    <path d="M16.15,5.64A1.55,1.55,0,0,0,14,5.7L8.48,11.18,6,8.73a1.55,1.55,0,0,0-2.18-.06,1.55,1.55,0,0,0,.06,2.18l3.5,3.51A1.55,1.55,0,0,0,9.6,14.3l6.48-6.48A1.55,1.55,0,0,0,16.15,5.64Z"></path>
                </svg>
            </h2>
            <div>
                <p>This text is fully legible even when the font size is increased or the screen is magnified.</p>
            </div>
        </section>
        <section className="example bad" style={{fontSize: `${fontSize}px`, width: `${width}%`}}>
            <h2 class="label">
                <svg viewBox="0 0 25 25" class="icon-cross" aria-hidden="true">
                    <path d="M12.12,10,16.3,5.82a1.55,1.55,0,0,0,.06-2.18,1.55,1.55,0,0,0-2.18.06L10,7.88,5.82,3.7a1.55,1.55,0,0,0-2.18-.06A1.55,1.55,0,0,0,3.7,5.82L7.88,10,3.7,14.18a1.55,1.55,0,0,0-.06,2.18,1.55,1.55,0,0,0,2.18-.06L10,12.12l4.18,4.18a1.5,1.5,0,1,0,2.12-2.12Z"></path>
                </svg>
            </h2>
            <div>
                <p>In contrast, this text quickly becomes unreadable when the font size is increased or the screen is magnified.</p>
            </div>
        </section>
        </>
    )
}

export default LowVisionDemo