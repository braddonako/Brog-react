import React, { Component } from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './sideDrawer'

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        console.log('user scrolling')
        if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return(
           <AppBar
                position='fixed'
                style={{
                    backgroundColor: this.state.headerShow ? 'transparent' : '#242121',
                    boxShadow: 'none',
                    padding: '10px 0px',
                    color: 'red'
                }}
           >
               <Toolbar>
                   <div className='header'>
                        <div className='font_oswald header_logo_venue'>BROG</div>
                        <div className='header_logo_title'>AKA Brads Blog</div>
                   </div>

                <div style={{right: '0',
                    position: 'absolute'
                }}>
                <IconButton
                    aria-label='Menu'
                    color='inherit'
                    onClick={() => this.toggleDrawer(true)}
                    
                >
                    <MenuIcon style={{position: 'relative'}}/>
                </IconButton>
                <SideDrawer 
                    open={this.state.drawerOpen}
                    onClose={(value) => this.toggleDrawer(value) }
                />
                
                </div>
               </Toolbar>
           </AppBar>
        )
    }
}

export default Header;