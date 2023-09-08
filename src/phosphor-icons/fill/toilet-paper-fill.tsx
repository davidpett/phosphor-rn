import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToiletPaperFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 120a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm56 0v88a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16v-21.65C87.37 200.37 76.18 208 64 208c-13.87 0-26.46-9.89-35.44-27.85C20.46 164 16 142.59 16 120s4.46-43.95 12.56-60.15C37.54 41.89 50.13 32 64 32h128c13.87 0 26.46 9.89 35.44 27.85C235.54 76.05 240 97.41 240 120Zm-164 0a12 12 0 1 0-12 12 12 12 0 0 0 12-12Zm148 8h-16a8 8 0 0 1 0-16h15.79c-1.95-38.1-17.63-64-31.79-64H92.12a73.6 73.6 0 0 1 7.32 11.85c7.14 14.28 11.44 32.56 12.37 52.15H128a8 8 0 0 1 0 16h-16v80h112Z" />
  </Svg>
);
const Memo = memo(SvgToiletPaperFill);
export default Memo;
