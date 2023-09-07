import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCubeFocusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M190 157.43V98.57a11 11 0 0 0-5.42-9.51l-51.34-29.65a10.49 10.49 0 0 0-10.48 0L71.43 89.06A11 11 0 0 0 66 98.57v58.86a11 11 0 0 0 5.42 9.51l51.34 29.65a10.51 10.51 0 0 0 10.48 0l51.33-29.65a11 11 0 0 0 5.43-9.51Zm-62-87.19L172.59 96 128 121.74 83.41 96Zm-50 36.49 44 25.4v50.17l-44-25.42Zm56 75.57v-50.17l44-25.4v50.15ZM230 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6ZM78 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6v-40a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6Zm152-40v40a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h34v-34a6 6 0 0 1 12 0ZM26 88V48a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12H38v34a6 6 0 0 1-12 0Z" />
  </Svg>
);
const Memo = memo(SvgCubeFocusLight);
export default Memo;
