import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChurchLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.09 146.86 190 124.6V104a6 6 0 0 0-3-5.21l-53-30.27V46h18a6 6 0 0 0 0-12h-18V16a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v22.52L69 98.79a6 6 0 0 0-3 5.21v20.6l-37.09 22.26A6 6 0 0 0 26 152v64a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-48a10 10 0 0 1 20 0v48a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-64a6 6 0 0 0-2.91-5.14ZM38 155.4l28-16.8V210H38Zm90-9.4a22 22 0 0 0-22 22v42H78V107.48l50-28.57 50 28.57V210h-28v-42a22 22 0 0 0-22-22Zm90 64h-28v-71.4l28 16.8Z" />
  </Svg>
);
const Memo = memo(SvgChurchLight);
export default Memo;
