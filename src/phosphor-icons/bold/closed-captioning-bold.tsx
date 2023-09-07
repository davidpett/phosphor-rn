import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClosedCaptioningBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20Zm-4 144H36V68h184ZM52 128a44 44 0 0 1 66-38.11 12 12 0 0 1-12 20.78 20 20 0 1 0 0 34.66 12 12 0 1 1 12 20.77A44 44 0 0 1 52 128Zm80 0a44 44 0 0 1 66-38.11 12 12 0 0 1-12 20.78 20 20 0 1 0 0 34.66 12 12 0 1 1 12 20.77 44 44 0 0 1-66-38.1Z" />
  </Svg>
);
const Memo = memo(SvgClosedCaptioningBold);
export default Memo;
