import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipBackBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.75 30.52a20 20 0 0 0-20.3.53L68 102V40a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-62l113.45 71A20 20 0 0 0 212 208.12V47.88a19.86 19.86 0 0 0-10.25-17.36ZM188 200.73 71.7 128 188 55.27Z" />
  </Svg>
);
const Memo = memo(SvgSkipBackBold);
export default Memo;
