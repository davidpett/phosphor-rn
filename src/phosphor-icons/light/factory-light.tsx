import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFactoryLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M114 176a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h28a6 6 0 0 1 6 6Zm62-6h-28a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12Zm70 46a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h18V88a6 6 0 0 1 9.6-4.8L98 124V88a6 6 0 0 1 9.6-4.8l41.4 31.08 12-84.26a14.07 14.07 0 0 1 13.86-12h18.12a14.07 14.07 0 0 1 13.86 12l15 105.13s.06.59.06.85v74h18a6 6 0 0 1 6.1 6Zm-86-93.51 10 7.51h39.08L195 31.72a2 2 0 0 0-2-1.72h-18.06a2 2 0 0 0-2 1.72ZM46 210h164v-68h-42a6 6 0 0 1-3.6-1.2L150 130l-40-30v36a6 6 0 0 1-9.6 4.8L46 100Z" />
  </Svg>
);
const Memo = memo(SvgFactoryLight);
export default Memo;
