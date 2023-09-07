import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAddressBook = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M83.19 174.4a8 8 0 0 0 11.21-1.6 52 52 0 0 1 83.2 0 8 8 0 1 0 12.8-9.6 67.88 67.88 0 0 0-27.4-21.69 40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 81.6 163.2a8 8 0 0 0 1.59 11.2ZM112 112a24 24 0 1 1 24 24 24 24 0 0 1-24-24Zm96-88H64a16 16 0 0 0-16 16v24H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H64V40h144Z" />
  </Svg>
);
const Memo = memo(SvgAddressBook);
export default Memo;
