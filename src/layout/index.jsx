/** @jsx jsx */

import { jsx } from 'theme-ui'
import React from 'react'
import Helmet from 'react-helmet'
import AOS from 'aos'
import config from '../../data/SiteConfig'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import favicon from '../../static/logos/favicon.ico'

import 'aos/dist/aos.css'
import './index.css'

export default class MainLayout extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Header config={config} />
        <div data-aos="fade-up" className="layout-container">
          <Helmet>
            {/* <link rel="icon" href={favicon} /> */}
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          {children}
        </div>
        <Footer config={config} />
      </div>
    )
  }
}
