import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 136v32a8 8 0 0 1-8 8 7.61 7.61 0 0 1-1.57-.16L156 161v23.73l17.66 17.65A8 8 0 0 1 176 208v24a8 8 0 0 1-11 7.43l-37-14.81-37 14.81A8 8 0 0 1 80 232v-24a8 8 0 0 1 2.34-5.66L100 184.69V161l-74.43 14.84A7.61 7.61 0 0 1 24 176a8 8 0 0 1-8-8v-32a8 8 0 0 1 4.42-7.16L100 89.06V44a28 28 0 0 1 56 0v45.06l79.58 39.78A8 8 0 0 1 240 136Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneFill);
export default Memo;
