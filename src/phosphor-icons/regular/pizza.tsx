import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPizza = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239.54 63a15.91 15.91 0 0 0-7.25-9.9 201.49 201.49 0 0 0-208.58 0 16 16 0 0 0-5.37 22l96 157.27a16 16 0 0 0 27.36 0l96-157.27a15.82 15.82 0 0 0 1.84-12.1ZM63.59 118.5a24 24 0 1 1 24.47 40.09Zm87.92 66.95A24 24 0 0 1 176 145.37Zm32.93-53.93a40 40 0 0 0-41.38 67.77L128 224l-31.5-51.57a40 40 0 1 0-41.35-67.76L48.8 94.26a152 152 0 0 1 158.39 0Zm31.1-50.93a168.12 168.12 0 0 0-175.08 0L32 66.77a185.6 185.6 0 0 1 192 0Z" />
  </Svg>
);
const Memo = memo(SvgPizza);
export default Memo;
