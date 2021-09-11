import React ,{ useState }from 'react';
import classes from './Layout.module.css'
import MenuToggle from "../../components/UI/menuToggle/menuToggle";
import Drawer from "../../components/navigation/drawer/drawer";

const Layout = (props) => {
    const [isOpen,setIsOpen] = useState(false)

    const onToggle = () => {
        setIsOpen (!isOpen)
    }

    const onClose = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={classes.Layout}>
            <MenuToggle
                isOpen={isOpen}
                onToggle={onToggle}
            />
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
            />
        <main>
            {props.children}
        </main>
        </div>
    );
};

export default Layout;