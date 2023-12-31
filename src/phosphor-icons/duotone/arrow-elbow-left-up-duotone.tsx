import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 96H32l48-48Z" opacity={0.2} />
    <Path d="M224 184H88v-80h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 32 104h40v88a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16ZM80 59.31 108.69 88H51.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftUpDuotone);
export default Memo;
