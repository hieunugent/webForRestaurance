import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import "./main.css";
export default function footer() {
    return (
        <div className="footerIcon">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            
            <h4> Copyright <CopyrightIcon fontSize="small"/>  2020</h4>

        </div>
    )
}
