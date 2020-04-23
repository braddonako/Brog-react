import React, { Component } from 'react';
import NewHeader from '../Components/Header_footer/Header/newHeader'
import Footer from '../Components/Header_footer/Footer'

class Layout extends Component {
    

    render() {
        return (
            <div>
                <NewHeader/>
                <div className='page_container'>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;