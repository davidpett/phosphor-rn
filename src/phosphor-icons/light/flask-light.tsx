import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlaskLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 200.8 158 97.48V38h10a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h10v59.48L36 200.8A14 14 0 0 0 48 222h160a14 14 0 0 0 12-21.2Zm-110.85-98.57a6 6 0 0 0 .85-3.09V38h36v61.14a6 6 0 0 0 .85 3.09l39.65 66.08c-12.41 3.16-30.86 3-55.79-9.66-16.94-8.58-33-12.8-47.83-12.64ZM209.72 209a2 2 0 0 1-1.74 1H48a2 2 0 0 1-1.71-3l29-48.41c14.89-2.08 31.68 1.55 49.94 10.79C144 178.8 159.67 182 172.42 182a67.89 67.89 0 0 0 20.47-3l16.8 28a2 2 0 0 1 .03 2Z" />
  </Svg>
);
const Memo = memo(SvgFlaskLight);
export default Memo;
