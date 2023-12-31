import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShapesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M71.49 60.55a12 12 0 0 0-23 0l-36 120A12 12 0 0 0 24 196h72a12 12 0 0 0 11.49-15.45ZM40.13 172 60 105.76 79.87 172ZM212 74a54 54 0 1 0-54 54 54.06 54.06 0 0 0 54-54Zm-84 0a30 30 0 1 1 30 30 30 30 0 0 1-30-30Zm96 70h-88a12 12 0 0 0-12 12v52a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-52a12 12 0 0 0-12-12Zm-12 52h-64v-28h64Z" />
  </Svg>
);
const Memo = memo(SvgShapesBold);
export default Memo;
