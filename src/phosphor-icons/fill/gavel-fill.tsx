import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGavelFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52.69 99.31a16 16 0 0 1 0-22.63l64-64a16 16 0 0 1 22.63 22.63l-64 64a16 16 0 0 1-22.63 0Zm190.63 17.37a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.62 16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.62Zm-37.66-18.34-48-48a8 8 0 0 0-11.31 0l-56 56a8 8 0 0 0 0 11.31L103 130.34l-74.31 74.35a16 16 0 0 0 22.62 22.62L125.66 153l12.69 12.69a8 8 0 0 0 11.31 0l56-56a8 8 0 0 0 0-11.35Z" />
  </Svg>
);
const Memo = memo(SvgGavelFill);
export default Memo;
