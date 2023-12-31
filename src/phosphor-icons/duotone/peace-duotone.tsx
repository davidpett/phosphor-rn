import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPeaceDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96Z" opacity={0.2} />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm88 104a87.48 87.48 0 0 1-11.64 43.7L136 123.84V40.37A88.11 88.11 0 0 1 216 128Zm-96-87.63v83.47L51.64 171.7A88 88 0 0 1 120 40.37ZM60.84 184.79 120 143.37v72.26a87.85 87.85 0 0 1-59.16-30.84ZM136 215.63v-72.26l59.16 41.42A87.85 87.85 0 0 1 136 215.63Z" />
  </Svg>
);
const Memo = memo(SvgPeaceDuotone);
export default Memo;
