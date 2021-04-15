import * as React from 'react';
import styled from 'styled-components';
import Chart from './chart';
import { CardProps, Crypto, DataType } from './types';

const CardContainer = styled.div`
  margin-top: -2rem;
  width: 20rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  background: #23244b;
  border-radius: 0.4rem;
  -webkit-box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
  box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
`;

const NameHolder = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  justify-content: space-between;
`;

interface changeRateProps {
  valueRate: string | number;
}

const ChangeRate = styled.h4<changeRateProps>`
  color: ${props => (props.valueRate < 0 ? '#F55959' : '#26E29C')};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.375rem;
`;

const CryptoName = styled.h4`
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.375rem;
`;

const CryptoPrice = styled.h4`
  color: white;
  font-size: 1.25rem;
  font-weight: 400;
  padding-left: 1rem;
  line-height: 2.125rem;
  margin-bottom: 0.2rem;
`;

const CryptoVolume = styled.h4`
  color: white;
  font-size: 0.75rem;
  font-weight: 400;
  padding-left: 1rem;
`;

const CryptoPlot = styled.div`
  height: 50%;
  width: 100%;
`;

export default function Card(props: CardProps): React.ReactElement {
  return (
    <CardContainer className={props.className}>
      <NameHolder>
        <CryptoName>{props.cryptoData.name}</CryptoName>
        <ChangeRate data-testid='rate' valueRate={props.cryptoData.change}>
          {props.cryptoData.change}%
        </ChangeRate>
      </NameHolder>
      <CryptoPrice>{props.cryptoData.price}</CryptoPrice>
      <CryptoVolume>Volume: {props.cryptoData.volume}</CryptoVolume>
      <CryptoPlot>
        <Chart data={props.cryptoData.history} mode={props.cryptoData.change} />
      </CryptoPlot>
    </CardContainer>
  );
}
