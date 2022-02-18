import './index.css';

function Header(props) {
    return (<header>
                <div className='logo'>{props.name}</div> 
                <div className='email'>{props.email}</div>
            </header>);
};

export default Header;
