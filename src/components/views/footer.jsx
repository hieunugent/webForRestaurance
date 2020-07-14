import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import "../style/main.css";
import { IconButton, Link } from '@material-ui/core';
export default function footer() {
    const preventDefault = (event) => event.preventDefault();
    return (
      <div className="footerIcon">
        <IconButton>
          <Link href="https://www.facebook.com/">
            <FacebookIcon />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="https://www.instagram.com/">
            <InstagramIcon className="colorinstagram" />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="https://twitter.com/explore">
            <TwitterIcon />
          </Link>
        </IconButton>

        <h4>
          Copyright <CopyrightIcon fontSize="small" /> 2020
        </h4>
      </div>
    );
}
