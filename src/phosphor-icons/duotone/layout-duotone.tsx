import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLayoutDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 104v104H40a8 8 0 0 1-8-8v-96Z" opacity={0.2} />
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v40H40V56ZM40 112h56v88H40Zm176 88H112v-88h104v88Z" />
  </Svg>
);
const Memo = memo(SvgLayoutDuotone);
export default Memo;
