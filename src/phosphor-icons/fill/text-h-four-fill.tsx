import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHFourFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-88 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h32V80a8 8 0 0 1 16 0Zm80 0h-8v16a8 8 0 0 1-16 0v-16h-32a8 8 0 0 1-7.49-10.81l24-64a8 8 0 0 1 15 5.62l-20 53.19H176v-24a8 8 0 0 1 16 0v24h8a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgTextHFourFill);
export default Memo;
