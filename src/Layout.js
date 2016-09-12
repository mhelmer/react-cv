import React from 'react';

export default function Layout({ children }) {
  return (
    <section className="sheet padding-10mm">
      <h1>Hello, world!</h1>
      {children}
    </section>
  )
}
