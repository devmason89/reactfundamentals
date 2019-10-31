import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
        const [color, setColor] = useState('white');
        const [backgroundColor, setBackgroundColor] = useState('purple');
        const [borderRadius, setBorderRadius]= useState('5px');
        const [borderStyle, setBorderStyle]= useState('dashed');
        const [display, setDisplay]= useState('inline-block');
        const [width, setWidth]= useState('350px');
        const [textAlign, setTextAlign]= useState('center');

        let styles = {
            color:color,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            borderStyle: borderStyle,
            display: display,
            width: width,
            textAlign: textAlign
        };

        const toggleColor = () => {
            color === 'white' ? setColor('red'): setColor('white');
            color === 'purple' ? setBackgroundColor('yellow'): setBackgroundColor('purple');
        }

        const toggleBackgroundColor = () => {
            backgroundColor === 'purple' ? setBackgroundColor('yellow'): setBackgroundColor('purple');
        }

        const toggleBorderRadius = () => {
            borderRadius === '5px' ? setBorderRadius('15px') : setBorderRadius('5px')
        }

        const toggleBorderStyle = () => {
            borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed')
        }

    return (
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string="Color Toggle" />
                <FunctionalComponent string="Background Toggle" function= {toggleBackgroundColor} selectedStyle= {backgroundColor}  />
                <FunctionalComponent string="Border Radius" function= {toggleBorderRadius} selectedStyle= {borderRadius} />
                <FunctionalComponent string="Border Style" function= {toggleBorderStyle} selectedStyle= {borderStyle}/>
                </div>
        </div>
    </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>  
            <p>{props.integer}</p>  
            <button onClick= {props.function}>Press Me!</button>  
            <TinyComponent selectedStyle = {props.selectedStyle} />     
        </div>
    )
}

//functional component with prop string. MainDiv not responsible for displaying the words. FunctionalComponent is a child of PropsDemo. <p> tag is determined by props object passed to functionalcomponent.

//only require one props for each type of data to use in props
//props can pass objects, arrays, functions, and even other JSX!

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is: {props.selectedStyle}</p>
        </div>
    )
};

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??'
}

//means take out string and function in parent component

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}