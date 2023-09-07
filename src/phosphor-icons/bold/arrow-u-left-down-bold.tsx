import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowULeftDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 88v88a12 12 0 0 1-24 0V88a44 44 0 0 0-88 0v107l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L76 195V88a68 68 0 0 1 136 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowULeftDownBold);
export default Memo;
