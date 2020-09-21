import db from './connection';

const Menu = () => {

};

Menu.getMenu = (cb: any)=>{
    db.query("SELECT * FROM Products ORDER BY menu_id", cb)
};

export default Menu;