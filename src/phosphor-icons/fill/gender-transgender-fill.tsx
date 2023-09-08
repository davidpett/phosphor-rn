import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderTransgenderFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M127.92 150a24 24 0 1 1-22-22 24 24 0 0 1 22 22ZM216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-24 32a8 8 0 0 0-8-8h-27.73a8.17 8.17 0 0 0-8.27 7.47 8 8 0 0 0 8 8.53h8.69L148 96.69l-10.34-10.35a8 8 0 0 0-11.49.18 8.22 8.22 0 0 0 .41 11.37L136.69 108 126 118.64A40 40 0 1 0 137.36 130L148 119.31l10.34 10.35a8 8 0 0 0 11.71-.43 8.2 8.2 0 0 0-.6-11.1L159.31 108 176 91.31v8.42a8.18 8.18 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8Z" />
  </Svg>
);
const Memo = memo(SvgGenderTransgenderFill);
export default Memo;
