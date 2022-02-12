import './index.css';

const handleClick = function (key) {
    document.getElementById(key).scrollIntoView({ behavior: 'smooth' });
};

function createItem(name) {
    return (<li key={name.toLowerCase()} onClick={() => handleClick(name.toLowerCase())}>
               {name}
            </li>);
};

function Menu(props) {
    return(

                <ul className='align sticky menu'>
                    { props.items.map(name => createItem(name)) }
                </ul>
            )
};

export default Menu;