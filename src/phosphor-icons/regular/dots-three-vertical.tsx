import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeVertical = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 128a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-12-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm0 112a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeVertical);
export default Memo;
