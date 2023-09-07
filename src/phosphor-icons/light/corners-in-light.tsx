import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCornersInLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M154 96V48a6 6 0 0 1 12 0v42h42a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6Zm-58 58H48a6 6 0 0 0 0 12h42v42a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6Zm112 0h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-42h42a6 6 0 0 0 0-12ZM96 42a6 6 0 0 0-6 6v42H48a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6V48a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgCornersInLight);
export default Memo;
