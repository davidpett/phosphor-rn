import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignCenterLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6Zm30 34a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12Zm152 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12Zm-24 40H64a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignCenterLight);
export default Memo;
