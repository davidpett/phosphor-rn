import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeadlightsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M162 80a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12h-72a6 6 0 0 1-6-6Zm78 90h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm0-64h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm0 32h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm-98-74v128a14 14 0 0 1-14 14H88a78 78 0 0 1-78-78.59C10.32 84.73 45.71 50 88.9 50H128a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H88.9C52.28 62 22.27 91.38 22 127.5A66 66 0 0 0 88 194h40a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgHeadlightsLight);
export default Memo;
