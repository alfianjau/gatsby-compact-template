/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
import { Link } from 'gatsby'
import Navigation from '../Nav/Nav'
import ColorButton from '../Buttons/ButtonColor'
import pokooi from '../../../static/logos/svg/pokooi.svg'
import './Header.css'

class Header extends Component {
  render() {
    const { config } = this.props
    // const url = config.siteRss
    const { copyright } = config
    if (!copyright) {
      return null
    }
    return (
      <header
        className="header"
        sx={{
          variant: 'styles.header',
        }}
      >
        <div
          sx={{
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link
            to="/"
            sx={{
              variant: 'styles.navlink',
              fontSize: 5,
              py: 2,
            }}
          >
            <img src={pokooi} alt="pokooi logo" />
          </Link>
          <div sx={{ mx: 'auto' }} />
          <Navigation />
          <ColorButton />
        </div>
      </header>
    )
  }
}

export default Header
