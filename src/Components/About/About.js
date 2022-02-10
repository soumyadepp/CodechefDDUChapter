import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './About.scss'
import Typist from 'react-typist'
const About = () => {
    let history = useHistory();
    const [value, setValue] = useState("");
    const [output, setOutput] = useState("");
    const [outputArray, setOutputArray] = useState([]);
    const handleState = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.substring(0, 5) == "echo ") {
            setOutputArray([]);
            setOutput(value.substring(5, value.length));
        }
        else if (value == 'cd') {
            setOutput("");
            history.push('/about')
        }
        else if (value.substring(0, 3) == "cd ") {
            if (value.substring(3, value.length) == '..') {
                history.push('/');
            }
            else if (value.substring(3, value.length) == 'Team' || value.substring(3, value.length) == "team") {
                history.push('/team');
            }
            else if (value.substring(3, value.length) == '.') {
                history.push('/about');
            }
            else {
                setOutputArray([]);
                setOutput(`Can't find specified path : ${value.substring(3, value.length)}`)
            }
        }
        else if (value == 'ls') {
            setOutputArray(['.', '..', 'team', 'events', 'contact']);
            setOutput("");
        }
        else if (value == 'clear') {

            setOutput("");
            setOutputArray([]);
        }
        else {
            setOutput(`Unknown command : ${value}`);

            setOutputArray([]);
        }
    }
    return (
        <div className="AboutFile">
            <div className="about-us">
                <Typist cursor={{ show: false }}><h1 className="about-header">About us</h1></Typist>
                <p className="about-text">cc-admin:<span style={{ color: '#114ea5' }}>~$</span><span style={{ color: '#efefef' }}> Codechef DDU Chapter, formally Decrypter's club was found in the year 20XX guided by Dr.Nikita Desai.</span></p>
                <p className="about-text">cc-admin:<span style={{ color: '#114ea5' }}>~$</span><span style={{ color: '#efefef' }}> The mission of our chapter is to boost the problem solving skills of our members and helping them grow.</span></p>
                <p className="about-text">cc-admin:<span style={{ color: '#114ea5' }}>~$</span><span style={{ color: '#efefef' }}> We conduct various events, contests and seminars for our college students to add value and experience to their learning.</span></p>
                <p className="about-text">cc-admin:<span style={{ color: '#114ea5' }}>~$</span><span style={{ color: '#efefef' }}> Below is the command line for your use. clear, ls, cd (for links), and echo are identified </span></p>
                <div className="form-div">
                    <form className="my-form" onSubmit={e => handleSubmit(e)}>
                        <p className="about-text">cc-admin:<span style={{ color: '#114ea5' }}>~$</span></p>
                        <input type="text" className="input-here" onChange={e => handleState(e)} />
                    </form>
                </div>
                {output.length != 0 && <p className="about-text" style={{ color: '#efefef', marginTop: '-5vmin' }}>{output}</p>}
                {outputArray.length != 0 &&
                    outputArray.map((item) => {
                        return (
                            <p className="about-text" style={{ color: '#efefef', marginTop: '-5vmin' }}>{item}<br /></p>
                        )
                    })
                }
            </div>
            <Footer />
        </div >
    )
}

export default About
