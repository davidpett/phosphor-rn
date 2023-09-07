import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.24 43.17-.06.12A65 65 0 0 0 72 88a64 64 0 0 0 0 128h88a87.34 87.34 0 0 0 31.8-5.93l10.28 11.31a8 8 0 1 0 11.84-10.76ZM160 200H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.3.12A88.4 88.4 0 0 0 72 128a8 8 0 0 0 16 0 72.25 72.25 0 0 1 5.06-26.54l87 95.7A71.66 71.66 0 0 1 160 200Zm88-72a87.89 87.89 0 0 1-22.35 58.61A8 8 0 0 1 213.71 176a72 72 0 0 0-96.34-106 8 8 0 0 1-9.48-12.89A88 88 0 0 1 248 128Z" />
  </Svg>
);
const Memo = memo(SvgCloudSlash);
export default Memo;
