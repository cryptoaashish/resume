import Menu from './menu';
import Page from './pages';
import hoc from '../hoc';

const items = ['About', 'Resume', 'Projects', 'Skills', 'News'];

const main = function() {
    return (<div>
                <Menu items={items}/>
                {items.map((item) => hoc(Page[item], { name: item.toLowerCase(), key: item.toLowerCase()}))}
            </div>);
};

export default main;