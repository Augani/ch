/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useD3 } from './useD3';
import { IChartProps } from '../types';
import RenderChart from './d3';

const Chart: React.FunctionComponent<IChartProps> = props => {
  const ref = useD3(RenderChart, [props.data, props.mode]);
  return (
    <svg
      ref={ref}
      style={{
        height: '100%',
        width: '100%',
        marginRight: '0px',
        marginLeft: '0px'
      }}
    ></svg>
  );
};

export default Chart;
