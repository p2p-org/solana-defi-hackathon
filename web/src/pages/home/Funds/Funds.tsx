import React, { FC, HTMLAttributes } from 'react';

import { styled } from '@linaria/react';
import classNames from 'classnames';
import { useGate, useStore } from 'effector-react';
import { PublicKey } from '@solana/web3.js';
import { $ratesMap } from '../../../models/rates';
import { FundRow } from './FundRow';
import { Column } from './common/Column';
import { Selector } from './Selector';
import { $funds, FundsGate } from './model';

const Wrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 38px;

  color: #000000;
  font-family: Titillium Web, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
`;

const ColumnsHeader = styled.div`
  display: flex;
  align-items: center;

  height: 36px;
  padding: 0 26px;

  background: #f6f6f8;
  border-radius: 12px;
`;

const ColumnName = styled.div`
  color: #a3a5ba;
  font-family: Titillium Web, sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 140%;

  &.since {
    color: #000000;

    cursor: pointer;
  }
`;

const FundList = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;

  margin-top: 20px;
`;

// TODO: temp
const fundAddress = new PublicKey(
  't72redTRJkPtUmTWWvPyjnkFKGVrHakv3DBQTheY4oD',
);

export const Funds: FC<HTMLAttributes<HTMLDivElement>> = ({
  style,
  className,
}) => {
  // TODO: temp
  useGate(FundsGate, { fundAddress });

  const funds = useStore($funds);

  return (
    <Wrapper style={style} className={className}>
      <Title>DTFs</Title>
      <ColumnsHeader>
        <Column className={classNames({ name: true })}>
          <ColumnName>Name</ColumnName>
        </Column>
        <Column className={classNames({ marketCap: true })}>
          <ColumnName>Market Cap</ColumnName>
        </Column>
        <Column className={classNames({ price: true })}>
          <ColumnName>Price</ColumnName>
        </Column>
        <Column className={classNames({ since: true })}>
          <ColumnName className={classNames({ since: true })}>
            <Selector>Since inception</Selector>
          </ColumnName>
        </Column>
        <Column className={classNames({ balance: true })}>
          <ColumnName>Balance</ColumnName>
        </Column>
      </ColumnsHeader>
      <FundList>
        {funds.map((fund) => (
          <FundRow key={fund.pubkey.toBase58()} fund={fund} />
        ))}
      </FundList>
    </Wrapper>
  );
};