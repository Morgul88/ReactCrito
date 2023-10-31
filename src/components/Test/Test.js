import React, { useState, useEffect } from 'react'

const Test = () => {
    const [value, setValue] = useState([]);
    
    useEffect(() => {
        ChangePost()
    },[])
    const ChangePost = async () => {
        // console.log('Hämtar api')
        // const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        // const data = await result.json()
        // console.log('running')
        // setValue(data)
    }
    const ClearPost = () => {
        console.log(1)
        setValue([])
    }




    
    return (
        <>
            <div>
                
                <button onClick={ClearPost}>Clear articles</button>
                <p>Detta är alla artiklar:</p>
                {
                    value.map((items) => (
                        <div key={items.id}>
                            <h3>{items.title}</h3>
                            <p>{items.author}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Test