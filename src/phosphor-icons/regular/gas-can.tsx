import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGasCan = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24h-76.69A15.86 15.86 0 0 0 112 28.69L101.66 39 91.31 28.69a16 16 0 0 0-22.62 0l-24 24a16 16 0 0 0 0 22.62L55 85.66 44.69 96A15.86 15.86 0 0 0 40 107.31V216a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM56 64l24-24 10.34 10.34-24 24Zm144 152H56V107.31l16-16L123.31 40H200ZM128 64a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8Zm52.8 62.4L141.33 156l39.47 29.6a8 8 0 1 1-9.6 12.8L128 166l-43.2 32.4a8 8 0 0 1-9.6-12.8l39.47-29.6-39.47-29.6a8 8 0 0 1 9.6-12.8L128 146l43.2-32.4a8 8 0 0 1 9.6 12.8Z" />
  </Svg>
);
const Memo = memo(SvgGasCan);
export default Memo;
