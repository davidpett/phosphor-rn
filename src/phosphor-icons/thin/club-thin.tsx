import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClubThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 92a52.88 52.88 0 0 0-8.26.65 52 52 0 1 0-95.48 0A52.88 52.88 0 0 0 72 92a52 52 0 1 0 31.38 93.48l-11.21 37.37A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-11.21-37.37A52 52 0 1 0 184 92Zm0 96a43.92 43.92 0 0 1-36.73-19.77 4 4 0 0 0-7.17 3.36L154.62 220h-53.24l14.52-48.41a4 4 0 0 0-7.17-3.36 44 44 0 1 1-21.91-65.67 4 4 0 0 0 4.66-6 44 44 0 1 1 73 0 4 4 0 0 0 4.66 6A44 44 0 1 1 184 188Z" />
  </Svg>
);
const Memo = memo(SvgClubThin);
export default Memo;
