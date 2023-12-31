import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleMinusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M160 144a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Zm72-56v112.89A15.13 15.13 0 0 1 216.89 216H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16Zm-16 0h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h176Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleMinusDuotone);
export default Memo;
