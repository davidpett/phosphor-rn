import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12Zm188 28H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24Zm0 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Zm0 40H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignRightBold);
export default Memo;
