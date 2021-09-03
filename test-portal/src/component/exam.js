import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../exam.css';
import axios from 'axios'

const Exam = () => {

    const [question, setData] = useState([]);
    const [Marks, setMarks] = useState();
    const [pMarks, setPMarks] = useState();
    const [cMarks, setCMarks] = useState();
    const [bMarks, setBMarks] = useState();
    const [b2Marks, setB2Marks] = useState();
    const [UserName, setUsername] = useState("Amool");
    const [time, setTime] = useState();

    const [render, setRender] = useState(true);

    const { name } = useParams();
    let [k, setK] = useState(1);
    let [l, setL] = useState(1);
    let [o, setO] = useState(1);
    let [q, setQ] = useState(1);

    useEffect(async () => {
        try {
            // setUsername(window.prompt("Enter your Name"));
            console.log("use effect context")
            const res = await axios({
                url: 'http://localhost:4000/get',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.status === 200) {
                console.log(res.data)
                setData([res.data.msgP, res.data.msgC, res.data.msgB1, res.data.msgB2])

                let min = 179;
                let sec = 60;
                let time;
                setInterval(() => {
                    sec = sec - 1;
                    if (sec < 10) {
                        sec = "0" + sec
                    } if (sec === 0) {
                        sec = 60;
                        min = min - 1;
                    } if (min < 0) {
                        min = 0;
                        sec = 0;
                    }
                    time = min + ':' + sec
                    setTime(time)
                    // console.log(time)
                    // document.querySelector('.timer').innerHTML = `Time: ${time}`
                },1000);
                // clock();
                document.querySelectorAll('.question').forEach(el => {
                    el.classList.add('hide');
                })
                document.querySelectorAll('.question')[0].classList.remove('hide')

                document.querySelectorAll('.option').forEach(el => {
                    el.classList.add('hide');
                })
                document.querySelectorAll('.option')[0].classList.remove('hide')

                document.querySelectorAll('.subject-vis-questionMenu').forEach(el => {
                    el.classList.add('hide')
                })
                document.querySelectorAll('.subject-vis-questionMenu')[0].classList.remove('hide');

                document.querySelectorAll('.subject-vis-questionMenu')[0].children[0].classList.add('red')
                document.querySelectorAll('.subject-vis-questionMenu')[0].children[0].classList.add('active')
                document.querySelectorAll('.subject-vis-questionMenu')[1].children[0].classList.add('red')
                document.querySelectorAll('.subject-vis-questionMenu')[1].children[0].classList.add('active')
                document.querySelectorAll('.subject-vis-questionMenu')[2].children[0].classList.add('red')
                document.querySelectorAll('.subject-vis-questionMenu')[2].children[0].classList.add('active')
                document.querySelectorAll('.subject-vis-questionMenu')[3].children[0].classList.add('red')
                document.querySelectorAll('.subject-vis-questionMenu')[3].children[0].classList.add('active')
                console.log(document.querySelectorAll('.subject-vis-questionMenu')[0].children[0])
            }

            return res.data;
        } catch (error) {
            console.log(error)
        }
    }, [])

    const selectOption = (e) => {
        e.target.children[1].checked = true;
        const id = e.target.parentNode.id.split(' ')[0];
        document.getElementById(id).classList.add('green');
        console.log(e.target.children[1].value);
        localStorage.setItem(id, e.target.children[1].value)
    }

    const Selectsubject = (e) => {
        console.log(e.target.id, "this is selecteds")
        // document.querySelectorAll('.subjectQuestion').forEach(el =>console.log( el.children))

        document.querySelectorAll(".subjectMenu div").forEach(element => {
            element.classList.remove("selected")
        });

        document.querySelectorAll('.question').forEach(element => {
            element.classList.add('hide')
        });

        document.querySelectorAll('.option').forEach(element => {
            element.classList.add('hide')
        });

        e.target.classList.add('selected')
        document.querySelectorAll(".subject-vis-questionMenu").forEach(element => {
            element.classList.add("hide")
        })
        if (e.target.innerHTML === 'PHYSICS') {
            console.log("physics")
            document.querySelectorAll(".subject-vis-questionMenu")[0].classList.remove('hide')
            document.querySelectorAll('.question')[0].classList.remove('hide')
            document.querySelectorAll('.option')[0].classList.remove('hide')
            document.querySelectorAll('.subject-vis-questionMenu')[0].children[0].classList.add('active')
            setK(1)
        } else if (e.target.innerHTML === 'CHEMISTRY') {
            document.querySelectorAll(".subject-vis-questionMenu")[1].classList.remove('hide')
            document.querySelectorAll('.question')[question[0].length].classList.remove('hide')
            document.querySelectorAll('.option')[question[0].length].classList.remove('hide')
            document.querySelectorAll('.subject-vis-questionMenu')[1].children[0].classList.add('active')
            console.log(document.querySelectorAll('.subject-vis-questionMenu')[0].children.length)
            setK(document.querySelectorAll('.subject-vis-questionMenu')[0].children.length + 1)
        } else if (e.target.innerHTML === 'BIOLOGY') {
            document.querySelectorAll(".subject-vis-questionMenu")[2].classList.remove('hide')
            document.querySelectorAll('.question')[question[0].length + question[1].length].classList.remove('hide')
            document.querySelectorAll('.option')[question[0].length + question[1].length].classList.remove('hide')
            document.querySelectorAll('.subject-vis-questionMenu')[2].children[0].classList.add('active')
            setK(document.querySelectorAll('.subject-vis-questionMenu')[0].children.length + document.querySelectorAll('.subject-vis-questionMenu')[1].children.length + 1)
        } else if (e.target.innerHTML === 'BIOLOGY2') {
            document.querySelectorAll(".subject-vis-questionMenu")[3].classList.remove('hide')
            document.querySelectorAll('.question')[question[0].length + question[1].length + question[2].length].classList.remove('hide')
            document.querySelectorAll('.option')[question[0].length + question[1].length + question[2].length].classList.remove('hide')
            document.querySelectorAll('.subject-vis-questionMenu')[3].children[0].classList.add('active')
            setK(document.querySelectorAll('.subject-vis-questionMenu')[0].children.length + document.querySelectorAll('.subject-vis-questionMenu')[1].children.length + document.querySelectorAll('.subject-vis-questionMenu')[2].children.length + 1)
        }
    }

    const changeQuestion = (e) => {
        setK(e.target.id)
        // console.log(e.target.id, k, document.querySelectorAll('.box').length, e.target)

        // console.log(document.querySelectorAll('.box'), "lets try")

        document.querySelectorAll('.box').forEach(el => el.classList.remove('active'))

        e.target.classList.add('red')
        e.target.classList.add('active')

        setK(parseInt(e.target.id))

        document.querySelectorAll('.question').forEach(el => el.classList.add('hide'))
        document.querySelectorAll('.option').forEach(el => el.classList.add('hide'))

        document.getElementById(`${e.target.id} question`).classList.remove('hide')
        document.getElementById(`${e.target.id} option`).classList.remove('hide')
        console.log(document.getElementById(`${e.target.id} question`), document.getElementById('1 option'))

        if (e.target === document.querySelectorAll('.box')[document.querySelectorAll('.box').length - 1]) {
            const no = document.querySelectorAll('.save').length
            console.log(document.querySelectorAll('.save')[no - 1])
            const html = `<a href="./result">Submit</a>`
            document.querySelectorAll('.save')[no - 1].innerHTML = html
        }
    }

    const save = (e, i, j, index) => {
        e.preventDefault()
        // console.log(e.target, i, j, question.length, question[i].length,"vlaue of k", index);

        document.querySelectorAll(".subject-vis-questionMenu").forEach(element => {
            element.classList.add("hide")
        })
        document.querySelectorAll(".subjectMenu div").forEach(element => {
            element.classList.remove("selected")
        });
        document.querySelectorAll(".box").forEach(element => {
            element.classList.remove("active")
        })

        document.querySelectorAll('.question').forEach(el => { el.classList.add('hide') })
        document.querySelectorAll('.option').forEach(el => { el.classList.add('hide') })

        if (k < document.querySelectorAll('.question').length) {
            document.querySelectorAll('.option')[k].classList.remove('hide')
            document.querySelectorAll('.question')[k].classList.remove('hide')
            document.querySelectorAll('.box')[k].classList.add('red')
            document.querySelectorAll('.box')[k].classList.add('active')
            if (j++ <= question[i].length) {
                if (j === question[i].length) {
                    // console.log(j,i,i++)
                    i++
                }
                document.querySelectorAll(".subject-vis-questionMenu")[i].classList.remove('hide')
                document.querySelectorAll(".subjectMenu div")[i].classList.add('selected')
            }
            setK(k + 1);
            if (k === (document.querySelectorAll('.save').length - 1)) {
                const no = document.querySelectorAll('.save').length
                document.querySelectorAll('.save')[no - 1].classList.add('hide')
                alert('this is a last question');
                
                // console.log(document.querySelectorAll('.save')[no - 1])
                // const html = `<a href="./result">Submit</a>`
                // document.querySelectorAll('.save')[no - 1].innerHTML = html
            }
        } else {
            submit(e)
            // alert('this is a last question');
        }
    }


    const submit = (e) => {
        e.preventDefault();
        alert("this is a last question")
        // console.log()
        document.querySelector('.container').classList.add('hide');
        document.querySelector('.result').classList.remove('hide');
        setTimeout(() => {
            document.querySelector('.submit').classList.add('hide');
        }, 6000);

        // console.log(question)
        let z = 1;
        let marks = 0;
        let pmarks = 0;
        let cmarks = 0;
        let bmarks = 0;
        let b2mark = 0;
        let count = 0;
        for (let i = 0; i < question.length; i++) {
            const element = question[i];
            for (let j = 0; j < element.length; j++) {
                if (element[j].section === "A") {
                    // console.log("count")
                    // console.log(element[j].answer, j)
                    // console.log(localStorage.getItem(z), element[j].answer, "value of z");
                    if (localStorage.getItem(z) === element[j].answer) {
                        marks = marks + 4;
                    } else if (localStorage.getItem(z) === null) {
                        marks = marks;
                    } else {
                        marks = marks - 1;
                    }
                    z++;
                } if (element[j].section === "B") {
                    if (count < 10) {
                        if (localStorage.getItem(z) != null) {
                            if (localStorage.getItem(z) === element[j].answer) {
                                marks = marks + 4;
                            } else if (localStorage.getItem(z) === null) {
                                marks = marks;
                            } else {
                                marks = marks - 1;
                            }
                            count++;
                        }
                    }
                    // console.log(count, z);
                    z++;
                }
            }
            if (i === 0) {
                pmarks = marks;
            } else if (i === 1) {
                cmarks = marks - pmarks;
            } else if (i === 2) {
                bmarks = marks - pmarks - cmarks;
            } else if (i === 3) {
                b2mark = marks - pmarks - cmarks - bmarks;
            }
            count = 0;
        }
        // let screenshot = document.querySelector('.result');
        // html2canvas(screenshot).then((canvas)=>{document})
        setMarks(marks);
        setPMarks(pmarks);
        setCMarks(cmarks);
        setBMarks(bmarks);
        setB2Marks(b2mark);
        // console.log(marks, pmarks, cmarks, bmarks, b2mark)
        localStorage.clear();
    }

    const clearResponse = (e) => {
        e.preventDefault();
        console.log(e.target.parentNode.parentNode.id)
        const id = e.target.parentNode.parentNode.id.split(' ')[0];
        localStorage.removeItem(id);
        document.getElementById(id).classList.remove('green');
        for (let i = 0; i < 4; i++) {
            const element = e.target.parentNode.parentNode.children[i];
            console.log()         
            element.children[1].checked = false;    
        }
    }

    if (time === "0"+":"+"0") {
        document.querySelector('.container').classList.add('hide');
        document.querySelector('.submit').classList.remove('hide');
       
        // submit()
        
    }


    return (
        <>
            {/* <h1>this is a platform
            {question.map((item,i)=>(
                <li key={i}>{item.question1} {item.section}</li>
            ))}
        </h1> */}
            <div className="container">
                <div className="nav">
                    <div className="logo"></div>
                    <h1>NEET FULL SULLYBUS</h1>
                    <div className="profile">
                        <div className="timer">Time: {time}</div>
                        <div >
                            <span>Name: {UserName}</span>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="right">
                        <div className="questionsection">
                            {question.map((item, i) => (
                                <div className="subjectQuestion">{
                                    item.map((questions, j) => (
                                        <div id={q++ + " question"} key={i} key={j} className="question" style={{ backgroundImage: `url(${questions.question1})` }} value={questions.section} ><h1 style={{ color: 'green' }}>{++j}</h1></div>
                                    ))
                                }</div>)
                            )}
                        </div>
                        <div className="optionsection">
                            {question.map((item, i) => (
                                <div className="subjectOption">
                                    {item.map((questionOption, j) => (
                                        <>
                                            <form className="option" action="" key={i} key={j} id={o++ + " option"}>
                                                <div className="options" onClick={(e) => selectOption(e)}>
                                                    <span>1)</span>  <input type="radio" name="option" value="1" onClick={(e) => { e.target.checked = true }} />
                                                </div>
                                                <div className="options" onClick={(e) => selectOption(e)}>
                                                    <span>2)</span>  <input type="radio" name="option" value="2" onClick={(e) => { e.target.checked = true }} />
                                                </div>
                                                <div className="options" onClick={(e) => selectOption(e)}>
                                                    <span>3)</span>  <input type="radio" name="option" value="3" onClick={(e) => { e.target.checked = true }} />
                                                </div>
                                                <div className="options" onClick={(e) => selectOption(e)}>
                                                    <span>4)</span> <input type="radio" name="option" value="4" onClick={(e) => { e.target.checked = true }} />
                                                </div>
                                                <div className="somebuttons">
                                                    <button onClick={(e) => { save(e, i, j, k) }} className="save">Save and Next</button>
                                                    <button className="clear" onClick={(e) => { clearResponse(e) }}>Clear Response</button>
                                                </div>
                                            </form>
                                        </>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="left">
                        <div className="subjectMenu">
                            <div className="physics selected" onClick={Selectsubject}>PHYSICS</div>
                            <div className="chemistry" onClick={Selectsubject}>CHEMISTRY</div>
                            <div className="bio1" onClick={Selectsubject}>BIOLOGY</div>
                            <div className="bio2" onClick={Selectsubject}>BIOLOGY2</div>
                        </div>
                        <div className="questionMenu">
                            {question.map((item, i) => (
                                <div className="subject-vis-questionMenu" >
                                    {item.map((info, j) => (
                                        <div className="box" id={l++} onClick={(e) => changeQuestion(e)} >
                                            {++j}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <button className="save submit hide" style={{margin: 'auto'}} onClick={(e)=>submit(e)}><Link to={{pathname: '/result',state: question}}>Submit</Link></button>
            <div className="result hide">
                <div className="resHeading">
                    <h1>Result in {name} Full Sullybus Test</h1>
                </div>
                <div className="rescont">
                    <table>
                        <tr>
                            <th></th>
                            <th>PHYSICS</th>
                            <th>CHEMISTRY</th>
                            <th>BIOLOGY</th>
                            <th>BIOLOGY2</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <th>Marks</th>
                            <td className="phy">{pMarks}/180</td>
                            <td className="che">{cMarks}/180</td>
                            <td className="bio">{bMarks}/180</td>
                            <td className="bio2">{b2Marks}/180</td>
                            <td className="total">{Marks}/720</td>
                        </tr>
                    </table>
                </div>
                <div id="output"></div>
            </div>
        </>
    )
}

export default Exam;