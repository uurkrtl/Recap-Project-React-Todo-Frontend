import {Menu, MenuItem, MenuItemProps} from "semantic-ui-react";
import {useState} from "react";

function Navbar() {
    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (_: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps) => setActiveItem(data.name || '')

    return (
        <div>
            <Menu>
                <MenuItem
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                >
                    Home
                </MenuItem>

                <MenuItem
                    name='todo'
                    active={activeItem === 'todo'}
                    onClick={handleItemClick}
                >
                    Todo
                </MenuItem>

                <MenuItem
                    name='doing'
                    active={activeItem === 'doing'}
                    onClick={handleItemClick}
                >
                    Doing
                </MenuItem>

                <MenuItem
                    name='done'
                    active={activeItem === 'done'}
                    onClick={handleItemClick}
                >
                    Done
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Navbar;