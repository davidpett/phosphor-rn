import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStairsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20Zm-48 128h44v16h-80v-16Zm12-24v-16h32v16Zm32-80v40h-44a12 12 0 0 0-12 12v28h-36a12 12 0 0 0-12 12v28H60V44ZM60 212v-24h136v24Z" />
  </Svg>
);
const Memo = memo(SvgStairsBold);
export default Memo;
