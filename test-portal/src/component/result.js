import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Result = ()=>{
    const {state} = this.props.locations

    const [Marks, setMarks] = useState();
    const [pMarks, setPMarks] = useState();
    const [cMarks, setCMarks] = useState();
    const [bMarks, setBMarks] = useState();
    const [b2Marks, setB2Marks] = useState();

    useEffect(()=>{

        console.log(state);
        let z = 1;
        let marks = 0;
        let pmarks = 0;
        let cmarks = 0;
        let bmarks = 0;
        let b2mark = 0;
        let count = 0;
        // for (let i = 0; i < question.length; i++) {
        //     const element = question[i];
        //     for (let j = 0; j < element.length; j++) {
        //         if (element[j].section === "A") {
        //             // console.log("count")
        //             // console.log(element[j].answer, j)
        //             // console.log(localStorage.getItem(z), element[j].answer, "value of z");
        //             if (localStorage.getItem(z) === element[j].answer) {
        //                 marks = marks + 4;
        //             } else if (localStorage.getItem(z) === null) {
        //                 marks = marks;
        //             } else {
        //                 marks = marks - 1;
        //             }
        //             z++;
        //         } if (element[j].section === "B") {
        //             if (count < 10) {
        //                 if (localStorage.getItem(z) != null) {
        //                     if (localStorage.getItem(z) === element[j].answer) {
        //                         marks = marks + 4;
        //                     } else if (localStorage.getItem(z) === null) {
        //                         marks = marks;
        //                     } else {
        //                         marks = marks - 1;
        //                     }
        //                     count++;
        //                 }
        //             }
        //             // console.log(count, z);
        //             z++;
        //         }
        //     }
        //     if (i === 0) {
        //         pmarks = marks;
        //     } else if (i === 1) {
        //         cmarks = marks - pmarks;
        //     } else if (i === 2) {
        //         bmarks = marks - pmarks - cmarks;
        //     } else if (i === 3) {
        //         b2mark = marks - pmarks - cmarks - bmarks;
        //     }
        //     count = 0;
        // }
        // let screenshot = document.querySelector('.result');
        // html2canvas(screenshot).then((canvas)=>{document})
        setMarks(marks);
        setPMarks(pmarks);
        setCMarks(cmarks);
        setBMarks(bmarks);
        setB2Marks(b2mark);
        // console.log(marks, pmarks, cmarks, bmarks, b2mark)
    },[])

    return(
        <>
         <div className="result">
                <div className="resHeading">
                    <h1>Result in Full Sullybus Test</h1>
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
                            {/* <td className="phy">{pMarks}/180</td>
                            <td className="che">{cMarks}/180</td>
                            <td className="bio">{bMarks}/180</td>
                            <td className="bio2">{b2Marks}/180</td>
                            <td className="total">{Marks}/720</td> */}
                        </tr>
                    </table>
                </div>
                <div id="output"></div>
            </div>
        </>
    )
}

export default Result;