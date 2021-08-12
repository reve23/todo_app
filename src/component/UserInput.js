import React, {useState} from 'react'

const UserInput = () => {
    const [ inputData, setInputData] = useState("");
    const [show,setShow] = useState([]);
    const addItem= () =>{
        if(!inputData){

        }else{
            setShow((show) => [...show, inputData])
            setInputData("")
        }
    }
    const deleteItem = (id) => {
        const rm = show.filter((elem, ind)=>{
            return ind !== id;
        })
        setShow(rm);
    }
    return (
       
        <div>
            <input type="text" placeholder="enter name" value={inputData}
            onChange={(e) =>setInputData(e.target.value)} />
            <button onClick={addItem}>+</button>
            <div>
                {show.map((elem,ind)=> {
                    return (
                        <div key={ind}>
                            <h2>{elem}</h2>
                            <button onClick={() => deleteItem(ind)}>-</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserInput;
