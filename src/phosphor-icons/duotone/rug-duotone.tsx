import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRugDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56 48v160h144V48Zm72 120-24-40 24-40 24 40Z" opacity={0.2} />
    <Path d="M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8Zm-8 184H64V56h128Zm-70.86-27.88a8 8 0 0 0 13.72 0l24-40a8 8 0 0 0 0-8.24l-24-40a8 8 0 0 0-13.72 0l-24 40a8 8 0 0 0 0 8.24Zm6.86-68.57L142.67 128 128 152.45 113.33 128Z" />
  </Svg>
);
const Memo = memo(SvgRugDuotone);
export default Memo;
