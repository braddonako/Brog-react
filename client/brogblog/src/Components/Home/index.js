import React, { Component } from 'react';
import Axios from 'axios';

class Home extends Component {

    render() {

        return (
            <div className='page_wrapper'>
                <div className='container'>
                    <div>
                        <h1 className='welcome'>Welcome to da BROG</h1>
                        <p className='welcomeSub'>All about Coding Bootcamps && JavaScript </p>
                    </div>
                    <div className='homeContainer'>
                        
                        <div>
                            <h1 className='postTitle'>So, you want to learn how to code?? HERE'S HOW:</h1>
                            <p className='postBody'>
                                {/* JUST FC*IN BUILD STUFF!!! When I first started out, I would see people on reddit saying this all the time, and its really fucking confusing. (At least I thought so, lol) I would think to myself 'What the hell am I going to build?'. Now that I am further along in the process, I realize how fricken true this is.   You just gotta do it. I know, I know. It sounds really simple, huh? */}
                                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.Został po raz pierwszy użyty w XV w.przez nieznanego drukarza do wypełnienia tekstem próbnej książki.Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.Spopularyzował się w latach 60. XX w.wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
                            </p>
                            
                        </div>
                        <div className='datePosted'>
                            Date Posted: 4/18/2020
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;