import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTennisBallFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24.81 115.41a103.9 103.9 0 0 1 90.6-90.65 4 4 0 0 1 4.47 3.79 87.82 87.82 0 0 1-91.27 91.33 4 4 0 0 1-3.8-4.47Zm202.54 20.7c-1.12 0-2.23-.07-3.35-.07a87.84 87.84 0 0 0-87.88 91.41 4 4 0 0 0 4.47 3.79 103.9 103.9 0 0 0 90.6-90.66 4 4 0 0 0-3.84-4.47Zm-76.89 14.35A103.33 103.33 0 0 1 224 120h3.09a4 4 0 0 0 4.12-4.43 103.91 103.91 0 0 0-90.88-90.89 4 4 0 0 0-4.43 4.12 103.72 103.72 0 0 1-30.36 76.7A103.33 103.33 0 0 1 32 136h-3.09a4 4 0 0 0-4.12 4.43 103.91 103.91 0 0 0 90.88 90.89 4 4 0 0 0 4.43-4.12 103.72 103.72 0 0 1 30.36-76.74Z" />
  </Svg>
);
const Memo = memo(SvgTennisBallFill);
export default Memo;
