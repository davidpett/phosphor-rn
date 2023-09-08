import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockersFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v176a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16ZM96 112H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm40 104a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0Zm64-72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgLockersFill);
export default Memo;
