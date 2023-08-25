import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Chatbot = () => {

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    function getData(val) {
        setData(val.target.value)
        setPrint(false)
        console.log(val.target.value)
    }

    return (

        <div className='bgcolor'>

            <div>
                <div className="chatbot">
                    <div className='chathead'>
                        {<Link to={`../Home`}>
                            <img src="image/left-arrow.png" className='logobot' alt='backlogo' />
                        </Link>}
                        <div className='d-flex'>
                            <img src="image/robot.png" className='logobots' alt='logo' />
                            <h3 className='bothead'>Sattu Bot</h3>
                        </div>
                        <img src="image/restart.png" alt='restartbtn' className="restartbtn" />
                    </div>
                    <div className='inputs'>
                        {print ? <p className='inptext'>{data}</p> : null}


                    </div>
                </div>
                <div className='input'>
                    <input type="text" placeholder='Type Here....' className='botinput' value={data} onChange={getData} />

                    <img src="image/send.png" alt="send" className='sendicon' onClick={() => setPrint(true)} />
                </div>
            </div>
        </div>

    )
}
export default Chatbot;