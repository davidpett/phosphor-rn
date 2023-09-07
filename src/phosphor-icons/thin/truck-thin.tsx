import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTruckThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m243.71 118.52-14-35A12 12 0 0 0 218.58 76H180V64a4 4 0 0 0-4-4H24a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H232a12 12 0 0 0 12-12v-64a4 4 0 0 0-.29-1.48ZM180 84h38.58a4 4 0 0 1 3.72 2.51L234.09 116H180ZM20 72a4 4 0 0 1 4-4h148v72H20Zm52 140a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm84.29-24H99.71a28 28 0 0 0-55.42 0H24a4 4 0 0 1-4-4v-36h152v18.71A28.05 28.05 0 0 0 156.29 188ZM184 212a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm52-28a4 4 0 0 1-4 4h-20.29A28 28 0 0 0 180 164.29V124h56Z" />
  </Svg>
);
const Memo = memo(SvgTruckThin);
export default Memo;
