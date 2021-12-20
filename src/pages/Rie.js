import React from 'react'
import "./styles.css"
import playstore from './image/playstore.png'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { useState } from 'react';
const messages = {
    'tr-TR': {
        baslik: "Rie Fuwa Hakkında",
        yazi: "Rie Fuwa, Google Play Store'a yüklediğim uygulamaları yayınlayan, geliştirici (takma) adıdır. Ben sadece onunla kalmasını istemediğim için yaptığım her şeyi internet üzerinde şahsi ismimden ziyade Rie Fuwa adı altında yayınlamak istiyorum. Sözde kurduğum topluluğun logosu ve tüm tasarımları bana aittir. ",
        link:"Rie Fuwa Google Play Store vitrinine gitmek için tıklayın."
    },
    'en-US': {
        baslik: "About Rie Fuwa ",
        yazi: "Rie Fuwa is developer name for Google Play Store. I user this name for everywhere. I have all rights of design and logo for Rie Fuwa.",
        link:"Click to go Rie Fuwa Google Play Store account."
    }

}
function Rie() {
    const defaultLocale = navigator.language
    const [locale, setLocale] = useState(defaultLocale)
   return (     
        <div className='rie'>
            <button className='button' onClick={() => setLocale("tr-TR")}>TR</button>
            <button className='button' onClick={() => setLocale("en-US")}>EN</button>
            <img className='imga' src={playstore}  alt="playstore" height={350} width={350} align="left" />
            <IntlProvider locale={locale} messages={messages[locale]}>
            <h1><FormattedMessage id='baslik'></FormattedMessage></h1>   
            <hr></hr>
            <p style={({color:"pink"})} ><FormattedMessage id='yazi'></FormattedMessage>
           <br></br><br></br><br></br><br></br>
            <a style={({ color: "greenyellow"  ,textDecoration: 'none'})} href="https://play.google.com/store/apps/dev?id=6066419099945322037" target="_blank" title="RieFuwa-GPS" rel="noreferrer"> 
           <FormattedMessage id='link'></FormattedMessage></a>
            </p>     
            </IntlProvider>   
        </div>
    )
}

export default React.memo(Rie)
