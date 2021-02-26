import React, { FC } from 'react';

import { styled } from '@linaria/react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { $connected, $wallet } from 'models/wallet';
import { Button } from 'components/ui/Button';
import { connectClicked } from './model';
import { NavMenu } from './NavMenu';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 88px;
  padding: 0 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
`;

const Left = styled.div`
  display: flex;
`;

const LogoLink = styled(Link)`
  font-family: TT Firs Neue, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
`;

const ByA = styled.a`
  margin-left: 13px;

  color: #8c8e99;
  font-family: Titillium Web, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
`;

const Right = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 36px;
  }
`;

export const Header: FC = () => {
  const connected = useStore($connected);
  const wallet = useStore($wallet);

  return (
    <Wrapper>
      <Container>
        <Left>
          <LogoLink to="/">.andromeda</LogoLink>
          <ByA href="https://p2p.org" target="_blank" rel="noopener noreferrer">
            —{'     '}by p2p.org
          </ByA>
        </Left>

        <Right>
          <NavMenu />
          {!connected ? (
            <Button hollow onClick={connectClicked}>
              Connect wallet
            </Button>
          ) : null}
        </Right>
      </Container>
    </Wrapper>
  );
};
