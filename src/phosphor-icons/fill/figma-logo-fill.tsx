import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFigmaLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 96a40 40 0 0 0-24-72H88a40 40 0 0 0-24 72 40 40 0 0 0 1.37 65A44 44 0 1 0 136 196v-36a40 40 0 1 0 48-64Zm-48-56h24a24 24 0 0 1 0 48h-24Zm24 112a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgFigmaLogoFill);
export default Memo;
