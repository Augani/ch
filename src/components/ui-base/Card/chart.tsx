import React, { ReactElement } from 'react';
import * as d3 from 'd3';
import { useD3 } from './hook';
import { ChartProps } from './types';

const renderChart = (svgRef: any, [data, mode]: any) => {
  const margin = { top: 0, right: 0, bottom: 40, left: 0 };
  const width = 460 - margin.left - margin.right;
  const height = 100 - margin.top - margin.bottom;

  const svg = d3.select(svgRef);
  svg.selectAll('*').remove();
  svg
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  data = data.map((l: { date: any; value: any }) => {
    return { date: d3.timeParse('%Y-%m-%d')(l.date), value: l.value };
  });

  const x = d3
    .scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, width]);
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))
    .call(g => g.select('.domain').remove());

  const y = d3
    .scaleLinear()
    .domain([
      d3.min(data, function (d) {
        return +d.value;
      }),
      d3.max(data, function (d) {
        return +d.value;
      })
    ])
    .range([height, 0]);
  svg
    .append('g')
    .call(d3.axisLeft(y))
    .call(g => g.select('.domain').remove());

  svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', mode < 0 ? '#F55959' : '#26E29C')
    .attr('stroke-width', 2)
    .attr(
      'd',
      d3
        .line()
        .x(function (d) {
          return x(d.date);
        })
        .y(function (d) {
          return y(d.value);
        })
    );
  svg.selectAll('.tick').selectAll('*').remove();
};

function Chart(props: ChartProps): React.ReactElement {
  const ref = useD3(renderChart, [props.data, props.mode]);
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
}

export default Chart;
