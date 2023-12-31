import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeadsetFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 128v80a40 40 0 0 1-40 40h-56a8 8 0 0 1 0-16h56a24 24 0 0 0 24-24h-24a24 24 0 0 1-24-24v-40a24 24 0 0 1 24-24h23.65A88 88 0 0 0 66 65.54 87.29 87.29 0 0 0 40.36 120H64a24 24 0 0 1 24 24v40a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24v-56a104.11 104.11 0 0 1 177.89-73.34A103.41 103.41 0 0 1 232 128Z" />
  </Svg>
);
const Memo = memo(SvgHeadsetFill);
export default Memo;
