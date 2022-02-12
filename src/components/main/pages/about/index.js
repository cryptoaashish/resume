import './index.css';

const about = function(props) {
    return (
        <div id={props.name} key={props.name} className='boxed'>
            <h2>About Me</h2>
        </div>);
};

export default about;