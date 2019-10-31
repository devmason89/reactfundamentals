import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

// const FunctionalComponentDemo = function() {
//     return(
//         <div className ="main">
//             <div className = "mainDiv">
//                 <div>Hello React</div>
//                 <div> How are you today?</div>  
//             </div>
//         </div>
//     )
// }

const FunctionalComponentDemo = () => {
    return(
        <Container className ="main">
            <Row>
                <Col xs="12">
            
                <h1>Functional Component</h1>
                <p>Functional components allow you to render information to the web page without having to use or change state.</p>
                <dl>
                    <dt>Presentational</dt>
                    <dd>Often used for simply rendering a small chunk of code to the dom.</dd>

                    <dt>No 'this' keyword</dt>
                    <dd>Unlike class components, functional ones don't use 'this'</dd>

                    <dt>No state</dt>
                    <dd>These are 'dumb' components for UI.</dd>

                    <dt>return()</dt>
                    <dd>Must return a single element.</dd>

                </dl>
            </Col>
         </Row>
         <hr />

                <h1>Functional Syntax versus Arrow Function</h1>
                <Row>
                    <Col md="6">
                        <CamelsAreCoolFatArrow className="logo" />
                    </Col>
                    <Col md="6">
                        <Camels />
                    </Col>
                </Row>
    </Container>
         
    )
}
export default FunctionalComponentDemo;

//regular component
const Camels = function() {
    return(
        <div>
            <Card>
                <img width="100%" height="280px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnynHSUOJ6DZWpoVEQk6T8jeD9S927VH9fzhv77DrU_v6LhRER&s" />
                    <CardBody>
                        <CardTitle> Camels are Sweet</CardTitle>
                        <CardSubtitle>From a Camel Lover</CardSubtitle>
                        <CardText><pre> const Camels = function() </pre></CardText>
                        <Button>Go visit a camel.</Button>
                    </CardBody>
            </Card>

        </div>

    )

}


//fat arrow component. 3 fewer lines, common in react
const CamelsAreCoolFatArrow = () => 
<div>
     <Card>
         <img width="100%" height="280px" src="https://cdn.britannica.com/57/7057-050-33CEB562/Bactrian-camel.jpg" alt="Card cap" />
         <CardBody>
             <CardTitle>Camels Slurp</CardTitle>
             <CardSubtitle>Camel spit</CardSubtitle>
             <CardText><pre>const CamelsAreCoolFatArrow = () => </pre></CardText>
             <Button>Adopt a camel today.</Button>
         </CardBody>
     </Card>

</div>

//reg JS
// let add = function (x,y) {
//     return x+y;
// }

// //arrow syntax
// let add = (x,y)=> x + y

//return is implied

// let greetUser = username => `Hello, ${username}!`;
// let greetUserSecondVersion = username => {return `Hello ${username}!`}
// console.log(greetUser("Kenn")=== greetUserSecondVersion('Kenn'))// true


//inside of return fx is called JSX ...kinda like HTML