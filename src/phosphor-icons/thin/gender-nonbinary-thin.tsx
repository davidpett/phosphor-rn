import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderNonbinaryThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 100.13V55.07l33.94 20.36a4 4 0 1 0 4.12-6.86L135.77 48l34.29-20.57a4 4 0 1 0-4.12-6.86L128 43.34 90.06 20.57a4 4 0 1 0-4.12 6.86L120.23 48 85.94 68.57a4 4 0 0 0 4.12 6.86L124 55.07v45.06a68 68 0 1 0 8 0ZM128 228a60 60 0 1 1 60-60 60.07 60.07 0 0 1-60 60Z" />
  </Svg>
);
const Memo = memo(SvgGenderNonbinaryThin);
export default Memo;
