import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGlobeHemisphereWestBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm84 108a83.64 83.64 0 0 1-4.47 27L167 130a19.65 19.65 0 0 0-7.8-2.78l-22.82-3.08a20.14 20.14 0 0 0-18.66 7.86h-4.07l-2.71-5.6a19.88 19.88 0 0 0-13.8-10.84l-2.68-.56 4-7h14.39a20 20 0 0 0 9.66-2.49l12.25-6.76a20.57 20.57 0 0 0 3.74-2.68l26.92-24.33A20 20 0 0 0 172 56.49 84 84 0 0 1 212 128Zm-71.24-83 6.2 11.1L122.75 78l-10.93 6H96.14a20.05 20.05 0 0 0-17.36 10.06l-4.49 7.85-6.61-17.63 9.91-23.42A83.91 83.91 0 0 1 140.76 45ZM44 128a83.52 83.52 0 0 1 4.4-26.77l7.74 20.65a19.89 19.89 0 0 0 14.52 12.53l19.53 4.2 3 6.1a20.11 20.11 0 0 0 13.55 10.77l-5 11.12a20 20 0 0 0 3.58 21.71l.21.22 18.16 18.7-.89 4.59A84.09 84.09 0 0 1 44 128Zm103.65 81.66a20.11 20.11 0 0 0-5-17.3l-.21-.22-17.72-18.25 11.37-25.52 19 2.56 41.43 25.48a84.2 84.2 0 0 1-48.87 33.25Z" />
  </Svg>
);
const Memo = memo(SvgGlobeHemisphereWestBold);
export default Memo;
