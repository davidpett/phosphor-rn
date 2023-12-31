import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShapesLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M69.69 62.1a6 6 0 0 0-11.38 0l-40 120A6 6 0 0 0 24 190h80a6 6 0 0 0 5.69-7.9ZM32.32 178 64 83l31.68 95ZM206 76a50 50 0 1 0-50 50 50.06 50.06 0 0 0 50-50Zm-88 0a38 38 0 1 1 38 38 38 38 0 0 1-38-38Zm106 70h-88a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6v-56a6 6 0 0 0-6-6Zm-6 56h-76v-44h76Z" />
  </Svg>
);
const Memo = memo(SvgShapesLight);
export default Memo;
