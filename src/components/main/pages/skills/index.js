import './index.css';
const skills = function(props) {
    return (
        <div id={props.name} key={props.name} className='boxed'>
            <h2>Skills</h2>
        </div>);
};

export default skills;