import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Linkup</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Linkups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Linkup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
