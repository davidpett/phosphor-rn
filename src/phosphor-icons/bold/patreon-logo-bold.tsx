import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPatreonLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M170 36a73.68 73.68 0 0 0-50 19.53A20 20 0 0 0 100 36H64a20 20 0 0 0-20 20v152a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20v-43.5A74 74 0 1 0 170 36ZM96 204H68V60h28Zm74-44a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50Z" />
  </Svg>
);
const Memo = memo(SvgPatreonLogoBold);
export default Memo;
