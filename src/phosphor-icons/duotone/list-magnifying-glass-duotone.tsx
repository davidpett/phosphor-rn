import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListMagnifyingGlassDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 144a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" opacity={0.2} />
    <Path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm8 72h72a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm88 48H40a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16Zm109.66 13.66a8 8 0 0 1-11.32 0L206 177.36A40 40 0 1 1 217.36 166l20.3 20.3a8 8 0 0 1 0 11.36ZM184 168a24 24 0 1 0-24-24 24 24 0 0 0 24 24Z" />
  </Svg>
);
const Memo = memo(SvgListMagnifyingGlassDuotone);
export default Memo;
