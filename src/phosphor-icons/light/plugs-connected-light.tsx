import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlugsConnectedLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236.24 19.76a6 6 0 0 0-8.48 0l-53.82 53.81-6.79-6.78a30 30 0 0 0-42.42 0L100 91.51l-7.76-7.75a6 6 0 0 0-8.48 8.48l7.75 7.76-24.72 24.73a30 30 0 0 0 0 42.42l6.78 6.79-53.81 53.82a6 6 0 1 0 8.48 8.48l53.82-53.81 6.79 6.78a30 30 0 0 0 42.42 0L156 164.49l7.76 7.75a6 6 0 0 0 8.48-8.48l-7.75-7.76 24.72-24.73a30 30 0 0 0 0-42.42l-6.78-6.79 53.81-53.82a6 6 0 0 0 0-8.48Zm-113.45 161a18 18 0 0 1-25.46 0l-22.06-22.09a18 18 0 0 1 0-25.46L100 108.49 147.51 156Zm57.94-57.94L156 147.51 108.49 100l24.72-24.73a18 18 0 0 1 25.46 0l22.06 22.06a18 18 0 0 1 0 25.46ZM90.31 33.9a6 6 0 1 1 11.38-3.8l8 24a6 6 0 1 1-11.38 3.8Zm-64 60.2a6 6 0 0 1 7.59-3.79l24 8a6 6 0 1 1-3.8 11.38l-24-8a6 6 0 0 1-3.79-7.59Zm203.38 67.8a6 6 0 0 1-7.59 3.79l-24-8a6 6 0 0 1 3.8-11.38l24 8a6 6 0 0 1 3.79 7.59Zm-64 60.2a6 6 0 1 1-11.38 3.8l-8-24a6 6 0 1 1 11.38-3.8Z" />
  </Svg>
);
const Memo = memo(SvgPlugsConnectedLight);
export default Memo;
