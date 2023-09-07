import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgImageSquareFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM48 48h160v77.38l-24.69-24.7a16 16 0 0 0-22.62 0L53.37 208H48Zm32 48a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgImageSquareFill);
export default Memo;
