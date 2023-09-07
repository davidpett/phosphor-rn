import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalMediumDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 100.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity={0.2} />
    <Path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77ZM112 120v80H32Zm80 80h-64v-96l64-64Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalMediumDuotone);
export default Memo;
