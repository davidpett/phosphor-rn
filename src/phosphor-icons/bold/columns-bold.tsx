import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgColumnsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H68V52h28Zm96-176h-36a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176h-28V52h28Z" />
  </Svg>
);
const Memo = memo(SvgColumnsBold);
export default Memo;
