import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListDashesLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M90 64a6 6 0 0 1 6-6h120a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6Zm126 58H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12Zm0 64H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12ZM56 58H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12Zm0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12Zm0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgListDashesLight);
export default Memo;
