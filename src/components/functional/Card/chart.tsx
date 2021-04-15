/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as d3 from 'd3';
import { useD3 } from './hook';
import { ChartProps } from './types';

const renderChart = (svgRef: any, [data, mode]: any) => {
  const margin = { top: 0, right: 0, bottom: 40, left: 0 };
  const width = 460 - margin.left - margin.right;
  const height = 100 - margin.top - margin.bottom;
  const svg = d3.select(svgRef);

  /** select all elements in svg and clear them since we are going to
    reuse the svg incase it has
  been called already
  */
  svg.selectAll('*').remove();

  /** Draw svg with width and height of parent */
  svg
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  /** Parse the date that is in the data for labeling and ordering */
  data = data.map(l => {
    return { date: d3.timeParse('%Y-%m-%d')(l.date), value: l.value };
  });

  /** Define your x axis using a property of the an object of the array */
  const x = d3
    .scaleTime()
    .domain(
      d3.extent(data, function (d: any) {
        return d.date;
      })
    )
    .range([0, width]);

  /** Draw your x axis line using the max of the data */
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))
    .call((g: any) => g.select('.domain').remove());

  /** Define your y axis line using the max of the data */
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
  /** Draw your y axis line using the max of the data */
  svg
    .append('g')
    .call(d3.axisLeft(y))
    .call((g: any) => g.select('.domain').remove());

  // Draw svg path with data now
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
        .x(function (d: any) {
          return x(d.date);
        })
        .y(function (d: any) {
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
