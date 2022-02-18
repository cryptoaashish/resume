import './index.css';

const handleClick = function (key) { 
    const menuElement = document.getElementById(key);
    menuElement.scrollIntoView({ behavior: 'smooth' });
};

function createItem(name) {
    return (<li key={name.toLowerCase()} onClick={() => handleClick(name.toLowerCase())}>
               {name}
            </li>);
};

function Menu(props) {
    return(

                <ul id='sub-menu' className='align sticky menu'>
                    { props.items.map(name => createItem(name)) }
                </ul>
            )
};

export default Menu;