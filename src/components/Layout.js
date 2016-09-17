import React from 'react';
import '../styles/main.scss'
import '../styles/headings.scss'

const Layout = ({ children }) => (
  <article className="sheet padding-10mm">
    {children}
  </article>
)

export default Layout
