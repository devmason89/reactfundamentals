import React from 'react';


const NytResults = (props) => {         //can now access props in our component
    console.log(props)
    return(
        <div>
            <div>
            {props.potato.map (result => {
                return(
                    <div key={result._id}>            
                        <h2>{result.headline.main}</h2>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                        <p>
                            {result.snippet}
                            <br />
                            {result.keywords.length > 0 ? 'Keywords: ': ''}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}> {keyword.value} </li>)}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>
                    </div>
                )
            })}
            <div>
                <button onClick={(e)=> props.changePage(e, 'down')}>Previous 10</button>
                <button onClick={(e)=> props.changePage(e, 'up')}>Next 10</button>
            </div>
            </div>              
        </div>
    )
}

export default NytResults;
// should there be an underscore in result._id? its' in the docs
//why do we have key? each iteration needs to be unique. the key makes it unique
//.map is taking each result and formatting it in JSX
//unique keys required when you create multiples of the same item aka when you use made
//if there is more than 1 image, we want to display image in the 2nd place [1] bc there is a large size and not the xl size of [0[]]
//using a list and map to put every keyword into a list item 
//last we make a link to the url of the article