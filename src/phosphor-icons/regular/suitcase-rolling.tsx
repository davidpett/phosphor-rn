import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSuitcaseRolling = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 88v96a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8Zm32 0a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8Zm48-16v144a16 16 0 0 1-16 16h-16v16a8 8 0 0 1-16 0v-16H96v16a8 8 0 0 1-16 0v-16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h24V24a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v24h24a16 16 0 0 1 16 16ZM104 48h48V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8Zm88 160V64H64v144h128Z" />
  </Svg>
);
const Memo = memo(SvgSuitcaseRolling);
export default Memo;
