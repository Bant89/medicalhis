import { Search } from '@styled-icons/bootstrap/Search';
import { AddCircle } from '@styled-icons/material/AddCircle';

import { LessThan } from '@styled-icons/fa-solid/LessThan';

import { Menu } from '@styled-icons/entypo/Menu';

import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';

import styled from 'styled-components';

import styles from './styles.module.scss';

const WhiteSearch = styled(Search)`
  width: 24px;
  height: 24px;
`;

const AddButton = styled(AddCircle)`
  width: 24px;
  height: 24px;
  margin: 0 20px;
`;

const MenuButton = styled(Menu)`
  width: 36px;
  height: 36px;
`;

const LessThanButton = styled(LessThan)`
  width: 18px;
  height: 32px;
`;

const UserIcon = styled(UserCircle)`
  color: #393e44;
  width: 40px;
  height: 40px;
`;

function Navbar() {
  return (
    <section className={styles.container}>
      <MenuButton />
      <section className={styles.rightContent}>
        <div>
          <WhiteSearch />{' '}
        </div>
        <div className={styles.mainContent}>
          <AddButton />
          <UserIcon />
          <div className={styles.userInformation}>
            <h4>Neuton Paniagua</h4>
            <p>Admin</p>
          </div>
          <LessThanButton />
        </div>
      </section>
    </section>
  );
}

export default Navbar;
