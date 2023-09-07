import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTidalLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m252.24 91.76-40-40a6 6 0 0 0-8.48 0L168 87.52l-35.76-35.76a6 6 0 0 0-8.48 0L88 87.52 52.24 51.76a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0L88 104.48 119.52 136l-35.76 35.76a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48L136.48 136 168 104.48l35.76 35.76a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48ZM48 127.51 16.49 96 48 64.49 79.51 96Zm80 80L96.49 176 128 144.49 159.51 176Zm0-80L96.49 96 128 64.49 159.51 96Zm80 0L176.49 96 208 64.49 239.51 96Z" />
  </Svg>
);
const Memo = memo(SvgTidalLogoLight);
export default Memo;
