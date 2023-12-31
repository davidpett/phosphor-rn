import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareFourLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Zm2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-44-64a6 6 0 0 1-6 6h-10v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1-5.69-7.9l24-72a6 6 0 1 1 11.38 3.8L104.32 138H138v-26a6 6 0 0 1 12 0v26h10a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareFourLight);
export default Memo;
