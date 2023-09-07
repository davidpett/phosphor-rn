import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFirstAidBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 84h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v44H40a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h44v44a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-44h44a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20Zm-4 64h-52a12 12 0 0 0-12 12v52h-40v-52a12 12 0 0 0-12-12H44v-40h52a12 12 0 0 0 12-12V44h40v52a12 12 0 0 0 12 12h52Z" />
  </Svg>
);
const Memo = memo(SvgFirstAidBold);
export default Memo;
