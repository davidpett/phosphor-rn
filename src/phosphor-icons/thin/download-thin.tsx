import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDownloadThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 136v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-64a12 12 0 0 1 12-12h40a4 4 0 0 1 0 8H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4v-64a4 4 0 0 0-4-4h-40a4 4 0 0 1 0-8h40a12 12 0 0 1 12 12Zm-110.83-5.17a4 4 0 0 0 5.66 0l48-48a4 4 0 1 0-5.66-5.66L132 118.34V24a4 4 0 0 0-8 0v94.34L82.83 77.17a4 4 0 0 0-5.66 5.66ZM196 168a8 8 0 1 0-8 8 8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgDownloadThin);
export default Memo;
