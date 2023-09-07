import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightningFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.85 125.46-112 120a8 8 0 0 1-13.69-7l14.66-73.33-57.63-21.64a8 8 0 0 1-3-13l112-120a8 8 0 0 1 13.69 7l-14.7 73.41 57.63 21.61a8 8 0 0 1 3 12.95Z" />
  </Svg>
);
const Memo = memo(SvgLightningFill);
export default Memo;
