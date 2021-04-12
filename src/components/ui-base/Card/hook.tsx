import React from 'react';

export const useD3 = (renderChartFn: any, dependencies: any) => {
  const ref = React.useRef<SVGSVGElement>(null);
  React.useEffect(() => {
    renderChartFn(ref.current, dependencies);
  }, [dependencies[0].length, dependencies[1]]);
  return ref;
};
