import React,{ useState } from 'react'

const NewTodo = () => {
    const [inputData, setInputData] = useState("");
    const [item,setItem] = useState([])
    const addItem = () => {
        if(!inputData){

        }else{
            setItem((item) => [...item,inputData])
            setInputData("")
        };
    }
    const deleteItem = (id) =>{
        const flitering = item.filter((elem, ind)=>{
            return ind !== id;
        })
        setItem(flitering)
    }
    return (
        <div>
            <div className="addItems">
                <input
                 type="text"
                 className="input"
                 placeholder="testing todo"
                 value={inputData}
                 onChange={(e) => setInputData(e.target.value)}
                  />
                <button className="btn" onClick={addItem}>+</button>
            </div>
            <div className="section">
                {item.map((elem, ind) => {
                    return (<div className="eachitems" key={ind}>
                        <h2>{elem}</h2>
                        <button onClick={() => deleteItem(ind)}></button>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

export default NewTodo;
