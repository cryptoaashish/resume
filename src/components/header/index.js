import './index.css';

function Header(props) {
    return (<header>{props.name} {props.email}</header>);
};

export default Header;
