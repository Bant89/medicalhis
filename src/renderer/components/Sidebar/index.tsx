import { Link } from 'react-router-dom';
import icon from '../../../../assets/icon.svg';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <img src={icon} alt="App Icon" />
      <ul>
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
