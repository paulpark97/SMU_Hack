import './App.css';
import Header from './components/header';

export default function About(){
    
    return (
        <div className='App'>
            <Header/>
        <div>
            <div>
                <h1 className='about-us-heading'>
                    The Vibe Check Story
                </h1>
            </div>
            <h1>
                sometimes you just need to vibe check yourself
            </h1>
            <img src='https://img.buzzfeed.com/buzzfeed-static/static/2019-11/8/0/tmp/88a186ed60ad/tmp-name-2-5870-1573173846-0_dblbig.jpg?resize=1200:*'/>
        </div>
        </div>
    )
}