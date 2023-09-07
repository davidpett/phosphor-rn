import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudWarningBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184Zm0 160H72a44 44 0 0 1-1.82-88A91.86 91.86 0 0 0 68 128a12 12 0 0 0 24 0 68 68 0 1 1 68 68Zm-12-76V88a12 12 0 0 1 24 0v32a12 12 0 0 1-24 0Zm28 40a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgCloudWarningBold);
export default Memo;
