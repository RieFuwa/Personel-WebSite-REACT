import React from 'react'
import "./styles.css";
import { IntlProvider, FormattedMessage } from 'react-intl'
import animal from './image/animal.png'
import anime from './image/anime.png'
import eng from './image/eng.png'
import med from './image/med.png'
import sq from './image/sq.jpg'
import fb from './image/fb.png'
import fs from './image/fs.png'
import head from './image/head.jpg'
import { useState } from 'react';
const messages ={
    'tr-TR': {
        baslik: "UYGULAMALARIM",
    },
    'en-US': {
        baslik: "MY APPLICATIONS"
    }
}
const defaultLocale = navigator.language
function Achi() {
    const [locale, setLocale] = useState(defaultLocale)
    return (       
        <div className="achi">
            <button className='button' onClick={() => setLocale("tr-TR")}>TR</button>
            <button className='button' onClick={() => setLocale("en-US")}>EN</button>
            <IntlProvider locale={locale} messages={messages[locale]}>
            
            <h1 className='achititle'><FormattedMessage id="baslik"></FormattedMessage></h1>
           
            
            <hr></hr>
            <ul >
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.meditation" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={med} height={150} width={150} align="center" title='Meditation Mindfulness and Sleep'alt="Meditation" /> <h3>Meditation Mindfulness</h3>
                    </a>
                    <br></br>
                </li>
            </ul>
            <ul>
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.flashlight" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={fs} height={150} width={150} align="center" title='Color Screen Flashlight' alt="Flashlight"/> <h3>Color Screen Flashlight</h3>
                    </a>
                    <br></br>
                </li>
            </ul>
           
            <ul>
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.fenerbahcebestesi" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={fb} height={150} width={150} align="center" title='Fenerbahçe 1907 Taraftar Besteleri'alt="Fenerbahçe" /> <h3>&nbsp;Fenerbahçe Besteleri&nbsp; </h3>
                    </a>
                    <br></br>
                </li>
            </ul> 
            <ul>
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.squidwallpaper" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={sq} height={150} width={150} align="center" title='Squid Game Wallpaper HD'alt="Wallpaper" /> <h3>Squid Game Wallpaper&nbsp;&nbsp;</h3>
                    </a>
                    <br></br>
                </li>
            </ul>
            <ul>
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.englishstories" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={eng} height={150} width={150} align="center" title='English Stories Audio'alt="Stories" /> <h3>&nbsp;English Stories Audio&nbsp;</h3>
                    </a>
                    <br></br>
                </li>
            </ul>      
            <ul>
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.omerfaruk.anime.wallpapers" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={anime} height={150} width={150} align="center" title='Anime Wallpaper X HD' alt="Wallpaper"/> <h3>&nbsp;Anime HD Wallpaper&nbsp;</h3>
                    </a>
                    <br></br>
                </li>
            </ul>
            <ul>
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.animalsounds" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={animal} height={150} width={150} align="center"  title='Baby Piano Animals Sounds' alt="Piano"/> <h3>&nbsp;&nbsp;&nbsp;Piano Animal Sound&nbsp;&nbsp;&nbsp;</h3>
                    </a>
                    <br></br>
                </li>
            </ul>
            <ul>
                <li style={({ textDecoration: 'none', listStyle: 'none' })}>
                    <a style={({ color: "greenyellow", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.omerfaruk.meditation.mindfulness" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='img' src={head} height={150} width={150} align="center" title='Headspace Meditation Sleep Relaxation Calming' alt="Headspace"/> <h3>&nbsp;Headspace Meditation&nbsp;</h3>
                    </a>
                    <br></br>
                </li>
            </ul>
            </IntlProvider>
        </div >

    )
}

export default React.memo(Achi)
