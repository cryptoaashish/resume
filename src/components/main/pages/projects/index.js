import './index.css';

const projects = function(props) {
    return (
        <div id={props.name} key={props.name} className='boxed'>
            <h2>Projects</h2>
        </div>);
};

export default projects;