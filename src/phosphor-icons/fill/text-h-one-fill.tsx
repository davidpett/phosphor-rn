import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHOneFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-64 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h56V80a8 8 0 0 1 16 0Zm56 16a8 8 0 0 1-16 0v-65l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 200 96Z" />
  </Svg>
);
const Memo = memo(SvgTextHOneFill);
export default Memo;
