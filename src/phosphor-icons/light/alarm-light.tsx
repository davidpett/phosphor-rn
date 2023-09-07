import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlarmLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 34a94 94 0 1 0 94 94 94.11 94.11 0 0 0-94-94Zm0 176a82 82 0 1 1 82-82 82.1 82.1 0 0 1-82 82ZM60.24 28.24l-32 32a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 8.48Zm176 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48ZM184 122a6 6 0 0 1 0 12h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50Z" />
  </Svg>
);
const Memo = memo(SvgAlarmLight);
export default Memo;
