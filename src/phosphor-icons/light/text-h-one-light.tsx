import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHOneLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 112v96a6 6 0 0 1-12 0v-84.79L203.33 133a6 6 0 0 1-6.66-10l24-16a6 6 0 0 1 9.33 5Zm-86-62a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgTextHOneLight);
export default Memo;
