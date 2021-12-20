import "./styles.css";
import React from 'react'
import { ImLinkedin,ImGithub,ImTwitter,ImInstagram,ImMail } from "react-icons/im";


function Share() {
 
    
    return (
        <div className="share">
                <a href="https://www.linkedin.com/in/bkabatas/" target="_blank" rel="noreferrer"><ImLinkedin  size="30px" color="yellow" /></a>&ensp;
                <a href="https://github.com/RieFuwa" target="_blank" rel="noreferrer"><ImGithub  size="30px" color="yellow" /></a>&ensp;
                <a href="https://twitter.com/RieFuwa_" target="_blank" rel="noreferrer"><ImTwitter  size="30px" color="yellow" /></a>&ensp;
                <a href="https://www.instagram.com/bedirhankbts/" target="_blank" rel="noreferrer"><ImInstagram  size="30px" color="yellow" /></a>&ensp;
                <a href="mailto:bedirhankabatas1@gmail.com" target="_blank" rel="noreferrer"><ImMail  size="30px" color="yellow" /></a>
        </div>
    )
}

 export default React.memo(Share)
// import {
//     LinkedinShareButton,
//     LinkedinIcon,
//     TwitterShareButton,
//     TwitterIcon,
//     EmailIcon,
//     EmailShareButton,
    
// } from "react-share";


// function Share() {
//     const shareUrl = "https://twitter.com/RieFuwa_"
//     const shareUrl1 = "https://www.linkedin.com/in/bedirhan-kabata%C5%9F-688388209/"
//     const shareUrl2 = "mailto:bedirhankabatas1@gmail.com"
    
//     return (
//         <div className="share">

//             <TwitterShareButton url={shareUrl}>
//                 <TwitterIcon size={40} />
//             </TwitterShareButton>
          
//             <LinkedinShareButton url={shareUrl1}>
//                 <LinkedinIcon size={40} />
//             </LinkedinShareButton>
            
//             <EmailShareButton url={shareUrl2}>
//                 <EmailIcon size={40} />
//             </EmailShareButton>

//         </div>
//     )
// }