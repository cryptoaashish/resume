import { useEffect, useState } from 'react';
import './index.css';
import Menu from './menu';
import Page from './pages';
import hoc from '../hoc';

const items = ['About', 'Resume', 'Projects', 'Skills', 'News'];


const Main = function() {
    const [ showTopButton, setShowTopButton ] = useState(false);

    const handleScroll = function (event) {
        const carouselY = document.getElementById('carousel').clientHeight;
        if (window.scrollY > carouselY) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });

    return (<div>
                <Menu items={items}/>
                {items.map((item) => hoc(Page[item], { name: item.toLowerCase(), key: item.toLowerCase()}))}
                <button className={showTopButton ? 'top-button showButton' : 'top-button removeButton' } onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) } }><span>&#8593;</span></button>
            </div>);
};

export default Main;