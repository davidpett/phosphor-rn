import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartScatterFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-28 32a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm0 56a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-40-16a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-24-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-24 56a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm100 64H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v104h136a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgChartScatterFill);
export default Memo;
