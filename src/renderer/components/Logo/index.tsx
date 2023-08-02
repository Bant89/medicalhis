import styled from 'styled-components';

import logo from '../../../../assets/medicalHisLogo.png';

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25em;
  font-size: 23px;
  line-height: 28.75px;
  color: #064caa;
  font-family: 'Hammersmith One', sans-serif;
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" />
      <p>medicalhis</p>
    </LogoContainer>
  );
}

export default Logo;
