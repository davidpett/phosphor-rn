import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGasPumpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m238.14 72.49-19.31-19.32a4 4 0 0 0-5.66 5.66l19.32 19.31a12 12 0 0 1 3.51 8.49V168a12 12 0 0 1-24 0v-40a20 20 0 0 0-20-20h-20V56a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v156H32a4 4 0 0 0 0 8h160a4 4 0 0 0 0-8h-20v-96h20a12 12 0 0 1 12 12v40a20 20 0 0 0 40 0V86.63a19.85 19.85 0 0 0-5.86-14.14ZM60 212V56a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12v156Zm80-100a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgGasPumpThin);
export default Memo;
