import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrainRegionalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 88a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm55.72 34.1-22.39 82.11A16 16 0 0 1 185.89 216H176l14.4 19.2a8 8 0 1 1-12.8 9.6L156 216h-56l-21.6 28.8a8 8 0 1 1-12.8-9.6L80 216h-9.89a16 16 0 0 1-15.44-11.79L32.28 122.1a8.08 8.08 0 0 1 0-4.2l22.39-82.11A16 16 0 0 1 70.11 24h115.78a16 16 0 0 1 15.44 11.79l22.39 82.11a8.08 8.08 0 0 1 0 4.2ZM136 152a8 8 0 0 0-16 0v40a8 8 0 0 0 16 0Zm70-38.31L185.89 40H70.11L50 113.69l78 14.18Z" />
  </Svg>
);
const Memo = memo(SvgTrainRegionalFill);
export default Memo;
