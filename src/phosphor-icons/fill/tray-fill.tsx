import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrayFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H48v-40h28.69L96 187.32a15.89 15.89 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208v40Z" />
  </Svg>
);
const Memo = memo(SvgTrayFill);
export default Memo;
