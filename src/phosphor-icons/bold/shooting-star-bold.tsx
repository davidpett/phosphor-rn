import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShootingStarBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243.18 68.87A17.16 17.16 0 0 0 228.24 57l-34.83-3-13.58-31.59a17.24 17.24 0 0 0-31.66 0L134.6 54.07 99.76 57A17.13 17.13 0 0 0 90 87.11l26.3 22.46-7.87 33.36A17.2 17.2 0 0 0 134 161.56l30-17.82 30 17.82a17.19 17.19 0 0 0 25.58-18.63l-7.87-33.36L238 87.11a17.07 17.07 0 0 0 5.18-18.24ZM192.91 94a17.05 17.05 0 0 0-5.55 17l5.14 21.79-19.68-11.69a17.22 17.22 0 0 0-17.64 0l-19.68 11.66 5.14-21.76a17 17 0 0 0-5.55-17l-17-14.49 22.54-1.9A17.17 17.17 0 0 0 155 67.3l9-20.91 9 20.9a17.18 17.18 0 0 0 14.38 10.36l22.54 1.9ZM32.49 184.49a12 12 0 0 1-17-17l52-52a12 12 0 1 1 17 17Zm68 4-52 52a12 12 0 0 1-17-17l52-52a12 12 0 0 1 17 17Zm72-17a12 12 0 0 1 0 17l-52 52a12 12 0 0 1-17-17l52-52a12 12 0 0 1 17 .02Z" />
  </Svg>
);
const Memo = memo(SvgShootingStarBold);
export default Memo;
