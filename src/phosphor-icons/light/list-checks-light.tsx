import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListChecksLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 128a6 6 0 0 1-6 6h-88a6 6 0 0 1 0-12h88a6 6 0 0 1 6 6Zm-94-58h88a6 6 0 0 0 0-12h-88a6 6 0 0 0 0 12Zm88 116h-88a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12ZM83.76 43.76 56 71.51 44.24 59.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48Zm0 64L56 135.51l-11.76-11.75a6 6 0 1 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48Zm0 64L56 199.51l-11.76-11.75a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48Z" />
  </Svg>
);
const Memo = memo(SvgListChecksLight);
export default Memo;
