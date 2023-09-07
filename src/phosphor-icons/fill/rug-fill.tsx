import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRugFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8ZM64 56h128v144H64Zm57.14 116.12-24-40a8 8 0 0 1 0-8.24l24-40a8 8 0 0 1 13.72 0l24 40a8 8 0 0 1 0 8.24l-24 40a8 8 0 0 1-13.72 0Z" />
  </Svg>
);
const Memo = memo(SvgRugFill);
export default Memo;
