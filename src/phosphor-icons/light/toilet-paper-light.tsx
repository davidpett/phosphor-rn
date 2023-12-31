import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToiletPaperLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M74 120a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm164 0v88a14 14 0 0 1-14 14H112a14 14 0 0 1-14-14v-29.52C89.65 195.49 77.6 206 64 206c-25.79 0-46-37.78-46-86s20.21-86 46-86h128c25.79 0 46 37.78 46 86Zm-140 0c0-44.26-17.58-74-34-74s-34 29.74-34 74 17.58 74 34 74 34-29.73 34-74Zm128 88v-82h-18a6 6 0 0 1 0-12h17.88c-1.51-40.92-18.21-68-33.88-68H87.76c12.57 13.92 21.09 38.74 22.12 68H128a6 6 0 0 1 0 12h-18v82a2 2 0 0 0 2 2h112a2 2 0 0 0 2-2Zm-50-94h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgToiletPaperLight);
export default Memo;
