import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInstagramLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 84a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 80a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm48-136H80a52.06 52.06 0 0 0-52 52v96a52.06 52.06 0 0 0 52 52h96a52.06 52.06 0 0 0 52-52V80a52.06 52.06 0 0 0-52-52Zm44 148a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h96a44.05 44.05 0 0 1 44 44ZM188 76a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgInstagramLogoThin);
export default Memo;
