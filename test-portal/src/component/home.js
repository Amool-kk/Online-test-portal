import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Home = () => {

    const data = ["Neet Test 1", "Neet Test 2", "Neet Test 1", "Neet Test 2"];

    const [datas, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    useEffect(async () => {
        try {
            console.log("use effect context")
            const res = await axios({
                url: 'http://localhost:4000/api',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.status === 200) {
                console.log(res.data.msg)
                setData(res.data.msg)
            }

            return res.data;
        } catch (error) {
            console.log(error)
        }
    }, [])

    const getPaper = (e) => {
        const paperName = e.target.innerHTML
        console.log(paperName)
        axios.post('http://localhost:4000/getPaper', { paperName })
            .then(res => {
                console.log(res, "post", res.data)
            })
    }

    return (
        <>
            <div className="maincont" >
                <div className="homecont" >
                    <h1> Neet Full Sullybus </h1>
                    <ul> {
                        datas.map((item, i) => (
                            <Link key={i} to={{
                                pathname: `./:${item}`
                            }}>
                                <li  onClick={(e) => getPaper(e)}>{item}</li>
                            </Link>
                        ))}
                    </ul>
                </div >
            </div>
        </>
    )
}


export default Home;