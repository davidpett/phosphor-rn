import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioButtonDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 128a56 56 0 1 1-56-56 56 56 0 0 1 56 56Z" opacity={0.2} />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm0-152a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64Zm0 112a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48Z" />
  </Svg>
);
const Memo = memo(SvgRadioButtonDuotone);
export default Memo;
