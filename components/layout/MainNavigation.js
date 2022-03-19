import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Lets Travel</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Travels</Link>
          </li>
          <li>
            <Link href='/new-trip'>Add New Travel</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
