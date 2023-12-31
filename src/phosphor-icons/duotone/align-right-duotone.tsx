import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M184 64v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-8 80H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h136a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm-32 24v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16Zm-16 0H80v40h96Zm16 88v40a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16Zm-16 0H40v40h136Z" />
  </Svg>
);
const Memo = memo(SvgAlignRightDuotone);
export default Memo;
