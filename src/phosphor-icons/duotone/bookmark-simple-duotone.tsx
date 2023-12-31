import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookmarkSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M192 48v176l-64-40-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16Zm0 177.57-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z" />
  </Svg>
);
const Memo = memo(SvgBookmarkSimpleDuotone);
export default Memo;
