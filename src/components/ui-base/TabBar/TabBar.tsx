import React, { FunctionComponent, ReactElement } from 'react';
import { ITabBarProps } from './ITabBarProps';
import { TabBarStyled } from './Styled';

export const TabBar: FunctionComponent<ITabBarProps> = props => {
  const { tabs, size, children, ...rest } = props;
  const [active, setActive] = React.useState(0);
  return (
    <TabBarStyled size={size} {...rest}>
      {tabs &&
        tabs.map((tab: string, index: number) => (
          <button
            onClick={() => setActive(index)}
            className={active === index ? 'active' : ''}
            key={index}
          >
            {tab}
          </button>
        ))}
    </TabBarStyled>
  );
};
