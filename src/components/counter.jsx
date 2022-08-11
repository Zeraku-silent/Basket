import React, {useState} from "react";

const Counter=()=>{
    
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(['Товар 1','Товар 2','Товар 3',])
    
    
    const formatCount = () => {
        return count=== 0 ? "Пусто" : count
    };

    const getBageClasses= () => {
        let classes = "badge m-2 "
        classes+=count===0 ? "bg-warning" : "bg-primary";
        return classes
    };
        const handleTagChange = (id) => {
            setTags(prevState => prevState.filter(tag=>tag!==id))
           
        };
        const renderTags=() => {
            return tags.length !== 0  
             && tags.map(tag => (
                <li 
                    key={tag}
                    className='btn btn-primary btn-sm m-2' 
                    onClick={() => handleTagChange(tag)}  
                 >
                    {tag}
                 </li>
                ))

        };
        if(tags.length !==0){
            return (
                <ul>
                    {renderTags()}
                </ul>
        )}


    const handleIncrement= () => {
        setCount((prevState) => prevState + 1);
    };
    const handleDecrement = () => {
        setCount((prevState) => prevState - 1);

    }

    if(tags.length !==0){
        return (
            <ul>
                {renderTags()}
            </ul>
    )}
    return (
    <>
        <ul>
            {renderTags()}
        </ul>
        <span className={getBageClasses()}>{formatCount()}</span>
        <button 
            className=" btn btn-primary btn-sm m-2" 
            onClick={handleIncrement}>
        +
        </button>
        <button 
             className=" btn btn-primary btn-sm m-2" 
             onClick={handleDecrement}>
             -
        </button>
    </>
    );
};


export default Counter;