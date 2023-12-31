import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodepenLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.79 89-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7.05l104 56a8 8 0 0 0 7.58 0l104-56A8 8 0 0 0 240 160V96a8 8 0 0 0-4.21-7ZM224 146.61 189.45 128 224 109.39Zm-51.43-27.7L136 99.22V53.39L215.13 96Zm-44.57 24L100.3 128l27.7-14.91L155.7 128Zm-8-89.52v45.83l-36.57 19.69L40.87 96Zm-88 56L66.55 128 32 146.61Zm51.43 27.7L120 156.78v45.83L40.87 160ZM136 202.61v-45.83l36.57-19.69L215.13 160Z" />
  </Svg>
);
const Memo = memo(SvgCodepenLogo);
export default Memo;
