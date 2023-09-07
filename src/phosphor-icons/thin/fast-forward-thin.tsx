import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFastForwardThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m238.52 118-88.19-56.13a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 132 71.84v44.59L46.33 61.87a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 28 71.84v112.32a11.66 11.66 0 0 0 6.15 10.36 12 12 0 0 0 12.18-.39L132 139.57v44.59a11.66 11.66 0 0 0 6.15 10.36 12 12 0 0 0 12.18-.39L238.52 138a11.81 11.81 0 0 0 0-19.94Zm-108.3 13.19L42 187.38a3.91 3.91 0 0 1-4 .13 3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35 4 4 0 0 1 1.91-.5 3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Zm104 0L146 187.38a3.91 3.91 0 0 1-4 .13 3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35 4 4 0 0 1 1.91-.5 3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Z" />
  </Svg>
);
const Memo = memo(SvgFastForwardThin);
export default Memo;
