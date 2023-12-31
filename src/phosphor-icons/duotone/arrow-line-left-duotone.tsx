import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 56v144l-72-72Z" opacity={0.2} />
    <Path d="M224 120h-72V56a8 8 0 0 0-13.66-5.66l-72 72a8 8 0 0 0 0 11.32l72 72A8 8 0 0 0 152 200v-64h72a8 8 0 0 0 0-16Zm-88 60.69L83.31 128 136 75.31ZM48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineLeftDuotone);
export default Memo;
