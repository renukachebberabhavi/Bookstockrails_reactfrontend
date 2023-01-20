import React, { useState, useEffect } from 'react';
import Searchbox from './Searchbox';
import axios from "axios"
const Dashboard = () => {

    // useEffect ,dependency array should be empty
    //axios 
    // store the data in state and than we will map it inside our react component
    let [data, setData] = useState([]);
    let [inputValue, setinputValue] = useState('')
    let [adddata, setaddedData] = useState([]);
    let [iddata, setidData] = useState([]);
    let [uiupdatecnter,setuiupdate] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("http://127.0.0.1:3002/bookstock");
            console.log(res.data);
            setData(res.data)

            // arryay of objects
        }
        fetchData()
    }, [uiupdatecnter])
    console.log(data);
    console.log(inputValue);
    

    // console.log(data.filter)
    let filterData = data.filter((ele) => ele.bookAuthor.toLowerCase() == inputValue.toLowerCase() || ele.bookName.toLowerCase() == inputValue.toLowerCase());

    const handleChange = (e) => {
        setaddedData({
            ...adddata,
            [e.target.name]: e.target.value
        })
    }
    async function addBook() {
        let res = await axios.post("http://127.0.0.1:3002/bookstock", adddata)
        console.log(res.data);
        if(res.data == "Data Added"){
            setuiupdate(uiupdatecnter+1)
        alert(" New book added,Please refresh the page if not deleted")
        }
        else{
            alert(" could not add book")
        }
    }
    const handlebookidChange = (e) => {
        setidData({
            // ...iddata,
            [e.target.name]: e.target.value
        })
    }
    async function deleteBook() {
        console.log(iddata.id);
        let text = "http://127.0.0.1:3002/bookstock/"
        // let text = "http://127.0.0.1:3002/bookstock"+${iddata:id}
        text.concat(iddata.id)
        console.log(text.concat(iddata.id))
        let res = await axios.delete(text.concat(iddata.id))
        console.log(res.data);
        if(res.data == "Data Deleted")
        {
            setuiupdate(uiupdatecnter+1)
        alert(" Book deleted, please refresh page if not updated")
        }
        else{
            alert(" could not delete book")
        }
    }
    //inside map have either return or have () 
    //{data.length && data.map((ele) => (<div></div>))} 
    return (
        <div>
            <Searchbox setinputValue={setinputValue} />
            <h1 ><i> Available Book details</i></h1>

            {filterData.length ? filterData.map((ele) => (
                <div>
                    <div>bookid: {ele.id}</div>
                    <div>bookname: {ele.bookName}</div>
                    <div>bookauthor: {ele.bookAuthor}</div>
                    <div>-----------------------------------</div>

                </div>
            ))
                :
                data.length && data.map((ele) => (
                    <div>
                        <div>bookid: {ele.id}</div>
                        <div>bookname: {ele.bookName}</div>
                        <div>bookauthor: {ele.bookAuthor}</div>
                        <div>-----------------------------------</div>
                    </div>
                ))
            }
            <div>
                <br></br>
                <h2 >Add book</h2>
                <input type="green" placeholder='book name' name='bookName' onChange={handleChange} />
                <input type="text" placeholder='book author' name='bookAuthor' onChange={handleChange} />

                <input type="submit" onClick={addBook} />

            </div>
            <div>
                <br></br>
                <h2>Delete book</h2>
                <input type="text" placeholder='book id' name='id' onChange={handlebookidChange} />
                
                <input type="submit"  onClick={deleteBook} />

            </div>
        </div>
    );
}

export default Dashboard;