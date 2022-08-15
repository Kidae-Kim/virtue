import React from 'react';
import Container from 'common/components/UI/Container';
import FooterArea, {
  MenuArea,
  CopyrightText,
} from './footer.style';

const Footer = () => {
  return (
    <FooterArea>
      <Container>
        {/* End of footer widgets area */}
        <MenuArea>
          <CopyrightText>대표. 정영덕</CopyrightText>
          <CopyrightText>
            Contact. 010-5026-5971 사업자등록번호 ???? 주소???
          </CopyrightText>
        </MenuArea>  
      </Container>
    </FooterArea>
  );
};

export default Footer;
