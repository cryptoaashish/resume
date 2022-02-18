import './index.css';

const news = function(props) {
    return (
        <div id={props.name} key={props.name} className='news'>
            <h2>News</h2>
        </div>);
};

export default news;