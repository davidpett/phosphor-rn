import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDownloadLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238 136v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-64a14 14 0 0 1 14-14h40a6 6 0 0 1 0 12H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2v-64a2 2 0 0 0-2-2h-40a6 6 0 0 1 0-12h40a14 14 0 0 1 14 14Zm-114.24-3.76a6 6 0 0 0 8.48 0l48-48a6 6 0 0 0-8.48-8.48L134 113.51V24a6 6 0 0 0-12 0v89.51L84.24 75.76a6 6 0 0 0-8.48 8.48ZM198 168a10 10 0 1 0-10 10 10 10 0 0 0 10-10Z" />
  </Svg>
);
const Memo = memo(SvgDownloadLight);
export default Memo;
