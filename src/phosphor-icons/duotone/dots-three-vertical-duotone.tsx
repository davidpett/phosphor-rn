import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeVerticalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 32v192a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Z"
      opacity={0.2}
    />
    <Path d="M140 128a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-12-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm0 112a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeVerticalDuotone);
export default Memo;
