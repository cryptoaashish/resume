import './index.css';

const resume = function(props) {
    return (
        <div id={props.name} key={props.name} className='boxed'>
            <h2>Resume</h2>
        </div>);
};

export default resume;