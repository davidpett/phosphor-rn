import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRug = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8ZM64 56h128v144H64Zm64 120a8 8 0 0 0 6.86-3.88l24-40a8 8 0 0 0 0-8.24l-24-40a8 8 0 0 0-13.72 0l-24 40a8 8 0 0 0 0 8.24l24 40A8 8 0 0 0 128 176Zm0-72.45L142.67 128 128 152.45 113.33 128Z" />
  </Svg>
);
const Memo = memo(SvgRug);
export default Memo;
