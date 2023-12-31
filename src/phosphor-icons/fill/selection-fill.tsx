import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM104 200H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Zm0-128H72v32a8 8 0 0 1-16 0V72a16 16 0 0 1 16-16h32a8 8 0 0 1 0 16Zm96 112a16 16 0 0 1-16 16h-32a8 8 0 0 1 0-16h32v-32a8 8 0 0 1 16 0Zm0-80a8 8 0 0 1-16 0V72h-32a8 8 0 0 1 0-16h32a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgSelectionFill);
export default Memo;
