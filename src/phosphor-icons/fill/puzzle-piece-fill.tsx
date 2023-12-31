import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPuzzlePieceFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M165.78 224H208a16 16 0 0 0 16-16v-37.65a8 8 0 0 0-11.06-7.35 23.37 23.37 0 0 1-8.94 1.77c-13.23 0-24-11.1-24-24.73s10.77-24.73 24-24.73a23.37 23.37 0 0 1 8.94 1.77 8 8 0 0 0 11.06-7.43V72a16 16 0 0 0-16-16h-36.22a35.36 35.36 0 0 0 .22-4 36 36 0 0 0-72 0 35.36 35.36 0 0 0 .22 4H64a16 16 0 0 0-16 16v32.22a35.36 35.36 0 0 0-4-.22 36 36 0 0 0 0 72 35.36 35.36 0 0 0 4-.22V208a16 16 0 0 0 16 16h42.22" />
  </Svg>
);
const Memo = memo(SvgPuzzlePieceFill);
export default Memo;
