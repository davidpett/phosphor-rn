import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDownLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 104v96l-48-48Z" opacity={0.2} />
    <Path d="M224 48a8 8 0 0 0-8 8 88.1 88.1 0 0 1-88 88H88v-40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 200v-40h40A104.11 104.11 0 0 0 232 56a8 8 0 0 0-8-8ZM72 180.69 43.31 152 72 123.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDownLeftDuotone);
export default Memo;
