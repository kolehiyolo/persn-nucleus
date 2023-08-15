import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function Header() {
  const activePage = useLocation();
  const links = ['about', 'contact'];

  const renderLinks = (link) => {
    return (
      <Link className={
        'link '
        + (
            activePage.pathname === `/${link}`
            ? 'active'
            : ''
          )
        }
        to={`/${link}`}
      >
        {link}
      </Link>
    )
  };

  return (
    <header className="header">
      <div className="branding">
        <Link to="/">Nucleus</Link>
      </div>
      <nav className="navigation">
        {links.map(renderLinks)}
      </nav>
    </header>
  );
};
