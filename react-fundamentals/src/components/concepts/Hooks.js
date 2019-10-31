import React, {useState, useEffect} from 'react';

const Hooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({});

    const fetcher = () =>{
        fetch(`https://swapi.co/api/people/${query}`)
        .then(res => res.json())
        .then(json => {setResults(json); console.log(json)})
    }

    return (
        <div className = "main">
            <div className = "mainDiv">
                <input value = {query} onChange= {e=> setQuery(e.target.value)} placeholder="enter your sw character number" />
                <button onClick={() => fetcher()}>Click for Character!</button>
                {results ? <h2>{results.name}</h2> : <div></div>}
            </div>
        </div>
    )
}




//in fetcher fx: searching API based on text input, jsonify the data, store these results in our results state variable and consolelog the results of fetch

const Hooks2 = () => {
    const [results, queryNum, setQueryNum]= useNumHook('')
    const [clicks, setClicks]= useClicks(0);

    return (
        <div className = "main">
            <div className = "mainDiv">
                <h3>Enter a number below to see a number fact</h3>
                <input value = {queryNum} onChange = {e => setQueryNum(e.target.value)} placeholder="enter a number"/>
                {results ? <h2>{results}</h2> : <div></div>}
                <button onClick={() => setClicks(clicks + 1)}>Click to update document title</button>
            </div>
        </div>
    )
}


const useNumHook = (num) => {
    const [queryNum, setQueryNum]= useState(num);
    const [results, setResults]= useState('');

    useEffect(()=> {
        if(queryNum !== ""){
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res => res.text())
            .then(json => {
                setResults(json);
                console.log(json)
            })
        }
    }, [queryNum])

    return[results, queryNum, setQueryNum]
}

const useClicks = (initCount)=> {
    const [clicks, setClicks]= useState(initCount)


useEffect(() => {
    document.title = `You have clicked ${clicks} times`;
}, [clicks])
return [clicks, setClicks]
}

export default Hooks2;
//Our 'effect' function (the arrow callback function inside the 'useEffect' parentheses) checks to see that the queryNum is a nonempty string.  If so, it fetches a math fact based upon the queryNum value.  After json-ifying the returned data in the first .then, our second .then calls setResults to store the json-ified data in the results state variable