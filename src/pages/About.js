import React from 'react'
// import { Link } from "react-router-dom";
import './styles.css';
import { IntlProvider, FormattedMessage } from 'react-intl'
import { useState } from 'react';
const messages = {
    'tr-TR': {
        baslik: "HAKKIMDA",
        yazi: "Herkese selam, ben Bedirhan Kabataş yazılım mühendisliği 3. sınıf öğrencisiyim. Yazılım ile uğraşmayı bir şeyler ortaya çıkarmayı seviyorum. Mobil uygulama geliştirmeyi insanlara sunmayı hep hayal ediyordum. Araştırmalarım sonucu ve arkadaşlarımın tavsiyesi ile Flutter öğrenmeye karar verdim. Google Play Store'a yayınladığım 8 adet uygulamam var. Fakat sadece uygulama geliştirmeye odaklanmak istemediğim için Front-End üzerine yoğunlaşıyorum ve bu gördüğünüz ilk yaptığım sitedir. Şimdiden herkese çok teşekkür ederim. "
    },
    'en-US': {
        baslik: "ABOUT ME",
        yazi: "Hi, I am Bedirhan. I am a student at university departman of computer engineering. I like working with software to make something usefull. My aim is to publish some usefull app to people. I searched some software language and i decided to learn about Flutter and also some of my friend advice to learn about it. I have 8 apps on google play but I dont want to focus only mobile apps, so I am interested in front-end and that is my first react site. "
    }

}
const defaultLocale = navigator.language
function About() {
    const [locale, setLocale] = useState(defaultLocale)
    return (
        <div className="about">
            <button className='button' onClick={() => setLocale("tr-TR")}>TR</button>
            <button className='button' onClick={() => setLocale("en-US")}>EN</button>
            <IntlProvider locale={locale} messages={messages[locale]}>

                <h1> <FormattedMessage id='baslik' /></h1>
                <hr />
                <p style={({ color: "pink" })}  >
                    <FormattedMessage id='yazi'></FormattedMessage>
                </p>
            </IntlProvider>
        </div>
    )
}
export default React.memo(About)
