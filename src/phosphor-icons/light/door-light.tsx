import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDoorLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 218h-26V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v178H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12ZM62 40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v178H62Zm104 92a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgDoorLight);
export default Memo;
