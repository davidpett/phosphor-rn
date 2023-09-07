import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHSix = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0Zm96 124a36 36 0 1 1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8 8 0 0 1 13.74 8.2l-16.69 28c.6 0 1.21-.05 1.82-.05A36 36 0 0 1 248 180Zm-16 0a20 20 0 1 0-20 20 20 20 0 0 0 20-20Z" />
  </Svg>
);
const Memo = memo(SvgTextHSix);
export default Memo;
