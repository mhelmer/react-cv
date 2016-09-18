import React from 'react';
import '../styles/main.scss'
import '../styles/headings.scss'
import 'font-awesome/scss/font-awesome.scss'

const Layout = ({ children }) => (
  <article className="sheet padding-10mm">
    {children}
  </article>
)

export default Layout
