import React, {useState} from 'react'                       //wasn't in original code
import NytResults from './NytResults';
const baseURL= 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key='VSIbV9kxwVSbbd9tRnzbUoJrvOMP0FXc';

const NytApp = () => {
    const [search, setSearch]= useState('');
    const [startDate, setStartDate]= useState('');             //first element state variable, 2nd is function to change it
    const [endDate, setEndDate]= useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        let url =`${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;    //these are stored in state values
        url = startDate ? url + `&begin_date=${startDate}` : url; //if they exist, add to our url, if not leave our url(parmeter) as is. 
        url = endDate ? url + `&end_date=${endDate}` : url; //building onto our url

        fetch(url)                                         //fetch is a 'get' request
        .then(res => res.json())                            //do not have bind this method bc arrow fxs do not create their own scope. won't use the keyword this to refer to themselves. 
        .then(data => setResults(data.response.docs))     //saving our information from the api to the state variable
        .catch(err => console.log(err))

    }
    //console log the request before trying to set state so you will know the actual format of the data you're getting
    const handleSubmit= (event) => {
        event.preventDefault()
        setPageNumber(0);                       //these were out of order in module. does order matter here? no.
        fetchResults();
        //prevents page from refreshing when we run the fetchresults fx
    };

    const changePageNumber = (event, direction) => {
        event.preventDefault()
        if(direction === 'down' && pageNumber > 0) {                  //making sure page number isn't in the negatives.
                setPageNumber(pageNumber -1);     //error in code here as well, should be -1
                fetchResults();
            
        }
        if(direction ==='up') {
            setPageNumber(pageNumber +1);
            fetchResults();
        }
    }

    //why is required hanging out on line 53? because our user HAS to input something aka it's required. HTML thing part of form validation

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit= {(e)=> handleSubmit(e) }>
                    <span>Enter a single search term (required) :</span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />  
                    <br/>
                    <span>Enter a start date:</span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e)=> setStartDate(e.target.value)} />
                    <br/>
                    <span>Enter an end date:</span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e)=> setEndDate(e.target.value)} />
                    <br />
                    <button className="submit">Submit search</button>
                </form>
                {
                    results.length > 0 ? <NytResults potato= {results} changePage={changePageNumber} /> : null
                }

            </div>
        </div>
    )
};

export default NytApp;
//result and changePageNumber are both props

//passing function changePageNumber to NytResults as a prop called changePage.
//[0-9]{8} means date has to numbers, specifically 8 digits 