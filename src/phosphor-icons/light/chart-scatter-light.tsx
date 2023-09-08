import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartScatterLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v154h186a6 6 0 0 1 6 6Zm-98-50a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm-24-56a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm-32 72a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm96-48a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm24-40a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm-8 68a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
  </Svg>
);
const Memo = memo(SvgChartScatterLight);
export default Memo;
