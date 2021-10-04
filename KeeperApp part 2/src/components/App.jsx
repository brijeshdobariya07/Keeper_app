import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Note from './Note.jsx';
import notes from '../notes.js';

function App(){
    return (<div>  
        <Header />
        {notes.map((notesPara)=><Note
            key={notesPara.key} 
            title={notesPara.title}
            content={notesPara.content}
        />)}
        <Footer />
    </div>
    );
}

export default App;