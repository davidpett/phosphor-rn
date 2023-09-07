import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVault = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216v56Zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z" />
  </Svg>
);
const Memo = memo(SvgVault);
export default Memo;
