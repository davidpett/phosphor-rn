import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeadphonesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M199.05 65.48A100.07 100.07 0 0 0 28 136v56a20 20 0 0 0 20 20h16a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20H36.08A92 92 0 0 1 128 44h.7a91.75 91.75 0 0 1 91.22 88H192a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h16a20 20 0 0 0 20-20v-56a99.43 99.43 0 0 0-28.95-70.52ZM64 140a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-52Zm156 52a12 12 0 0 1-12 12h-16a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h28Z" />
  </Svg>
);
const Memo = memo(SvgHeadphonesThin);
export default Memo;
