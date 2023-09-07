import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M146 104V64a6 6 0 0 1 12 0v25.51l45.76-45.75a6 6 0 0 1 8.48 8.48L166.48 98H192a6 6 0 0 1 0 12h-40a6 6 0 0 1-6-6Zm-42 42H64a6 6 0 0 0 0 12h25.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L98 166.48V192a6 6 0 0 0 12 0v-40a6 6 0 0 0-6-6Zm62.48 12H192a6 6 0 0 0 0-12h-40a6 6 0 0 0-6 6v40a6 6 0 0 0 12 0v-25.52l45.76 45.76a6 6 0 0 0 8.48-8.48ZM104 58a6 6 0 0 0-6 6v25.51L52.24 43.76a6 6 0 0 0-8.48 8.48L89.52 98H64a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLight);
export default Memo;
