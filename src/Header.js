import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum'
import { Link, useHistory } from 'react-router-dom'
import './Header.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Header({ btnBack }) {
    const history = useHistory()

    return (
        <div className='header'>
            {btnBack ? (
                <IconButton onclick={() => history.replace(btnBack)}>
                    <ArrowBackIosIcon fontSize='large' className='header__icon' />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon' />
                </IconButton>
            )}

<Link to='/'>
        <img
          className='header__logo'
          src='https://i.dlpng.com/static/png/6184865-this-post-is-a-part-of-tinder-logo-transparent-background-hd-tinder-logo-png-840_771_preview.png'
          alt='tinderLogo'
        />
      </Link>

      <Link to='/chat'>
        <IconButton>
          <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
      </Link>


        </div>
    )
}

export default Header
