import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMoneyBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 52H16A12 12 0 0 0 4 64v128a12 12 0 0 0 12 12h224a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12Zm-58.79 128H74.79A60.18 60.18 0 0 0 28 133.21v-10.42A60.18 60.18 0 0 0 74.79 76h106.42A60.18 60.18 0 0 0 228 122.79v10.42A60.18 60.18 0 0 0 181.21 180ZM228 97.94A36.23 36.23 0 0 1 206.06 76H228ZM49.94 76A36.23 36.23 0 0 1 28 97.94V76ZM28 158.06A36.23 36.23 0 0 1 49.94 180H28ZM206.06 180A36.23 36.23 0 0 1 228 158.06V180ZM128 88a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 56a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgMoneyBold);
export default Memo;
