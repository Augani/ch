import React, { FunctionComponent } from 'react';
import { ITabBarProps } from './type';
import { TabBarStyled } from './styles';

export const TabBar: FunctionComponent<ITabBarProps> = props => {
  const { tabs, size, children, activeTab = 0, ...rest } = props;
  const [active, setActive] = React.useState(activeTab);
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
