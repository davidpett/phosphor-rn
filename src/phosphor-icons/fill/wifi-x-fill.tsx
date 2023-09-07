import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiXFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.51 98.13a8.21 8.21 0 0 1 .61 11.1 8 8 0 0 1-11.72.43l-18.35-18.35-18.34 18.35a8 8 0 0 1-11.72-.43 8.21 8.21 0 0 1 .61-11.1L188.74 80l-18.11-18.11a8.21 8.21 0 0 1-.41-11.37 8 8 0 0 1 11.49-.18l18.34 18.35 18.35-18.35a8 8 0 0 1 11.49.18 8.21 8.21 0 0 1-.41 11.37L211.37 80ZM212 124.71a23.89 23.89 0 0 1-4.86-3.74l-4.21-4.2a4 4 0 0 0-5.65 0L193 121a24 24 0 0 1-34.21-.26c-9.19-9.48-8.69-24.73.65-34.06l3.81-3.82a4 4 0 0 0 0-5.66l-4.19-4.2a24 24 0 0 1 .06-34 2.78 2.78 0 0 0-1.52-4.71A191.86 191.86 0 0 0 128 32 186.77 186.77 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81 15.65 15.65 0 0 0 3.54 11.89l104.07 125.43A15.93 15.93 0 0 0 128 224a16 16 0 0 0 12.31-5.77l72.6-87.5a4 4 0 0 0-.91-6.02Z" />
  </Svg>
);
const Memo = memo(SvgWifiXFill);
export default Memo;
