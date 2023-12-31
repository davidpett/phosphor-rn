import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextBDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M192 160a40 40 0 0 1-40 40H72V48h68a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40Z"
      opacity={0.2}
    />
    <Path d="M170.48 115.7A44 44 0 0 0 140 40H72a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h80a48 48 0 0 0 18.48-92.3ZM80 56h60a28 28 0 0 1 0 56H80Zm72 136H80v-64h72a32 32 0 0 1 0 64Z" />
  </Svg>
);
const Memo = memo(SvgTextBDuotone);
export default Memo;
