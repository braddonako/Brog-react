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
                <a className='navBarList' href='/show'>
                        <ListItem button >
                            About BROG
                        </ListItem>
                </a>
            
                <a className='navBarList' href='/posts'>
                <ListItem button >
                    Posts
                </ListItem>
                </a>

                <a className='navBarList' href='/login'>
                <ListItem button >
                    Login
                </ListItem>
                </a>

                <a className='navBarList' href='/register'>
                <ListItem button >
                    Register
                </ListItem>
                </a>

            </List>

        </Drawer>

    );
};

export default SideDrawer;