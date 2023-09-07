import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleStarLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M126 208a6 6 0 0 1-6 6H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14.06 14.06 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14v32a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h80a6 6 0 0 1 6 6Zm109.82-41.76-23.49 19.39 7.16 28.93a6 6 0 0 1-8.87 6.61L184 205.5l-26.62 15.67a6 6 0 0 1-8.87-6.61l7.16-28.93-23.49-19.39a6 6 0 0 1 3.36-10.61l31-2.4 11.91-27.61a6 6 0 0 1 11 0l11.91 27.61 31 2.4a6 6 0 0 1 3.36 10.61Zm-19.1.21-19.83-1.53a6 6 0 0 1-5-3.61L184 143.14l-7.84 18.17a6 6 0 0 1-5 3.61l-19.83 1.53 14.94 12.33a6 6 0 0 1 2 6.07l-4.63 18.74L181 193.36a6 6 0 0 1 6.08 0l17.37 10.23-4.64-18.74a6 6 0 0 1 2-6.07Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleStarLight);
export default Memo;
