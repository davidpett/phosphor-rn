import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilCircleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.12 55.87A102 102 0 1 0 55.88 200.12 102 102 0 1 0 200.12 55.87ZM106 134h44l14.1 30.56A30 30 0 0 0 128 174a30 30 0 0 0-36.11-9.46Zm5.54-12L128 86.32 144.47 122ZM134 192a18 18 0 0 1 36 0v15.64a89.26 89.26 0 0 1-36 10.14Zm-48 0a18 18 0 0 1 36 0v25.78a89.26 89.26 0 0 1-36-10.14Zm105.64-.36A92.76 92.76 0 0 1 182 200v-24a6 6 0 0 0-.55-2.51l-48-104a6 6 0 0 0-10.9 0l-48 104A6 6 0 0 0 74 176v24a92.76 92.76 0 0 1-9.64-8.37 90 90 0 1 1 127.28 0Z" />
  </Svg>
);
const Memo = memo(SvgPencilCircleLight);
export default Memo;
