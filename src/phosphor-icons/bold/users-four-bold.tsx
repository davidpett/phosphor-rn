import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUsersFourBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24.79 121.59a12 12 0 0 0 16.81-2.38 48 48 0 0 1 76.81 0 12 12 0 0 0 16.8 2.39 12.24 12.24 0 0 0 2.38-2.39 48 48 0 0 1 76.81 0 12 12 0 1 0 19.19-14.41 72 72 0 0 0-25.3-21.22 40 40 0 1 0-64.58 0A71 71 0 0 0 128 94.31a71 71 0 0 0-15.71-10.74 40 40 0 1 0-64.58 0 72 72 0 0 0-25.3 21.22 12 12 0 0 0 2.38 16.8ZM176 44a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm-96 0a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm128.29 151.57a40 40 0 1 0-64.58 0A71.31 71.31 0 0 0 128 206.3a71.31 71.31 0 0 0-15.71-10.73 40 40 0 1 0-64.58 0 72 72 0 0 0-25.3 21.22 12 12 0 0 0 19.19 14.42 48 48 0 0 1 76.81 0 12 12 0 0 0 16.8 2.39 12.24 12.24 0 0 0 2.38-2.39 48 48 0 0 1 76.81 0 12 12 0 1 0 19.19-14.41 71.91 71.91 0 0 0-25.3-21.23ZM80 156a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm96 0a16 16 0 1 1-16 16 16 16 0 0 1 16-16Z" />
  </Svg>
);
const Memo = memo(SvgUsersFourBold);
export default Memo;
