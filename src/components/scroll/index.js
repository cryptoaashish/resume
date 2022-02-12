import React, { useEffect } from 'react';


const Scroll = function(props) {
    useEffect(() => {
        console.log('use effect call');
    }, []);
    return <>{props.children}</>
};

export default Scroll;