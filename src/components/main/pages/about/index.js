import './index.css';

const About = function(props) {
    return (
        <div id={props.name} key={props.name} className='about'>
            <h2>About Me</h2>
        </div>);
};

export default About;