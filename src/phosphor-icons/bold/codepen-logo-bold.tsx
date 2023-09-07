import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodepenLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m237.68 85.43-104-56a12 12 0 0 0-11.38 0l-104 56A12 12 0 0 0 12 96v64a12 12 0 0 0 6.32 10.57l104 56a12 12 0 0 0 11.38 0l104-56A12 12 0 0 0 244 160V96a12 12 0 0 0-6.32-10.57ZM220 139.91 197.88 128 220 116.09Zm-47.43-25.54L140 96.83V60.09L206.69 96Zm-44.57 24L108.74 128 128 117.63 147.26 128Zm-12-78.28v36.74l-32.57 17.54L49.31 96Zm-80 56L58.12 128 36 139.91Zm47.43 25.54L116 159.17v36.74L49.31 160ZM140 195.91v-36.74l32.57-17.54L206.69 160Z" />
  </Svg>
);
const Memo = memo(SvgCodepenLogoBold);
export default Memo;
