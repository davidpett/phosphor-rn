import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExclude = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174.63 81.37a80 80 0 1 0-93.26 93.26 80 80 0 1 0 93.26-93.26ZM224 160c0 1.52-.07 3-.18 4.51l-50-50A80 80 0 0 0 176 98a64.11 64.11 0 0 1 48 62Zm-13.47 39.21-52.62-52.61a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.21ZM183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.44-9.93l52.61 52.62A64 64 0 0 1 183 219.7ZM45.47 56.79l52.62 52.61a80.5 80.5 0 0 0-9.93 15.44L36.3 73a64 64 0 0 1 9.17-16.21ZM73 36.3l51.86 51.86a80.5 80.5 0 0 0-15.44 9.93L56.79 45.47A64 64 0 0 1 73 36.3ZM160 96a64.07 64.07 0 0 1-64 64 64.07 64.07 0 0 1 64-64Zm-2-16a80 80 0 0 0-16.49 2.13l-50-50C93 32.07 94.48 32 96 32a64.11 64.11 0 0 1 62 48.05ZM32 96c0-1.52.07-3 .18-4.51l50 50A80 80 0 0 0 80.05 158 64.11 64.11 0 0 1 32 96Zm66 80a80 80 0 0 0 16.49-2.13l50 50c-1.49.11-3 .18-4.51.18A64.11 64.11 0 0 1 98 176Z" />
  </Svg>
);
const Memo = memo(SvgExclude);
export default Memo;
