import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBarricadeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16ZM32 92l60 60H32Zm192 60h-60L92 80h72l60 60v12Z" />
  </Svg>
);
const Memo = memo(SvgBarricadeFill);
export default Memo;
