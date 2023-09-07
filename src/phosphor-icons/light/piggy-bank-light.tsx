import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPiggyBankLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M190 116a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm-38-50h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12Zm94 46v32a22 22 0 0 1-22 22h-3.77l-16.68 46.71a14 14 0 0 1-13.19 9.29h-12.72a14 14 0 0 1-13.19-9.29l-2.39-6.71h-60.12l-2.39 6.71A14 14 0 0 1 86.36 222H73.64a14 14 0 0 1-13.19-9.29l-12.69-35.53a85.72 85.72 0 0 1-21.47-50.24A18 18 0 0 0 14 144a6 6 0 0 1-12 0 30 30 0 0 1 24.19-29.43A86.1 86.1 0 0 1 112 34h104a6 6 0 0 1 0 12h-28.18a85.92 85.92 0 0 1 35.12 39.83c.6 1.38 1.16 2.77 1.68 4.18A22 22 0 0 1 246 112Zm-12 0a10 10 0 0 0-10-10h-3.66a6 6 0 0 1-5.73-4.2 71.4 71.4 0 0 0-2.68-7.19A74 74 0 0 0 144 46h-32a74 74 0 0 0-54.56 124 5.81 5.81 0 0 1 1.22 2l13.09 36.64a2 2 0 0 0 1.89 1.36h12.72a2 2 0 0 0 1.89-1.33L92.06 198a6 6 0 0 1 5.65-4h68.58a6 6 0 0 1 5.65 4l3.81 10.69a2 2 0 0 0 1.89 1.33h12.72a2 2 0 0 0 1.89-1.33l18.1-50.69a6 6 0 0 1 5.65-4h8a10 10 0 0 0 10-10Z" />
  </Svg>
);
const Memo = memo(SvgPiggyBankLight);
export default Memo;
