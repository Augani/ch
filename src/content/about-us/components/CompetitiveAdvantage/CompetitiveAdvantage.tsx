import React, { FunctionComponent } from 'react';

import ICompetitiveAdvantage from './ICompetitiveAdvantageProps';
import CompetitiveAdvantageStyled from './CompetitiveAdvantageStyled';

const CompetitiveAdvantage: FunctionComponent<ICompetitiveAdvantage> = props => {
  const { image, title, summery } = props;

  return (
    <CompetitiveAdvantageStyled>
      <div className='competitive-icon'>
        <img src={image.url} alt={image?.alt ?? ''} />
      </div>
      <h5>{title}</h5>
      <p>{summery}</p>
    </CompetitiveAdvantageStyled>
  );
};

export default CompetitiveAdvantage;
