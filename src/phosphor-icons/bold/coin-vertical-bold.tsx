import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoinVerticalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 20h-48c-38.13 0-68 47.44-68 108s29.87 108 68 108h48c38.13 0 68-47.44 68-108S190.13 20 152 20Zm37.21 152h-22.9a162.62 162.62 0 0 0 5.29-32h23.93a133.22 133.22 0 0 1-6.32 32Zm-17.61-56a162.62 162.62 0 0 0-5.29-32h22.9a133.22 133.22 0 0 1 6.32 32Zm5.63-56h-20a98.26 98.26 0 0 0-10-16H152c5.37 0 15.25 2.25 25.23 16ZM74.77 189.84C65.24 173.51 60 151.55 60 128s5.24-45.51 14.77-61.84C86 46.88 97.91 44 104 44s18 2.88 29.23 22.16C142.76 82.49 148 104.45 148 128s-5.24 45.51-14.77 61.84C122 209.12 110.09 212 104 212s-18-2.88-29.23-22.16ZM152 212h-4.79a98.26 98.26 0 0 0 10-16h20c-9.96 13.75-19.84 16-25.21 16Z" />
  </Svg>
);
const Memo = memo(SvgCoinVerticalBold);
export default Memo;
