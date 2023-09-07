import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWechatLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M231.76 216.34a6 6 0 0 1-7.42 7.42l-29.87-8.53a72 72 0 1 1 28.76-28.76Z"
      opacity={0.2}
    />
    <Path d="M231.79 187.33a80 80 0 0 0-62.21-114.74 80 80 0 1 0-145.37 66.74l-7.66 26.82A14 14 0 0 0 30 184a13.65 13.65 0 0 0 3.84-.54l26.82-7.66a78.86 78.86 0 0 0 25.77 7.63 80 80 0 0 0 108.89 40.37l26.82 7.66a14 14 0 0 0 17.3-17.3ZM65.36 160.21a8 8 0 0 0-6-.68l-26.41 7.55 7.55-26.41a8 8 0 0 0-.68-6 64 64 0 0 1 111.86-62.24A80.12 80.12 0 0 0 80 152a79.31 79.31 0 0 0 1.31 14.3 63.34 63.34 0 0 1-15.95-6.09Zm150.17 28.46 7.55 26.41-26.41-7.55a8 8 0 0 0-6 .68 63.95 63.95 0 1 1 25.57-25.57 8 8 0 0 0-.71 6.03ZM144 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm56 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgWechatLogoDuotone);
export default Memo;
