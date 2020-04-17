import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
        
            <List component='nav'>
                <a className='navBarList' href='/about'>
                        <ListItem button >
                            About
                        </ListItem>
                </a>
            
                <a className='navBarList' href='/posts'>
                <ListItem button >
                    Posts
                </ListItem>
                </a>

                <a className='navBarList' href='/register_login'>
                <ListItem button >
                    Register/Login
                </ListItem>
                </a>

                

            </List>

        </Drawer>

    );
};

export default SideDrawer;