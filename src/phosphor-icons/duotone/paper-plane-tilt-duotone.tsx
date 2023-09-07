import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneTiltDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m223.69 42.18-58.22 192a8 8 0 0 1-14.92 1.25L110 149.81a8 8 0 0 0-3.8-3.8l-85.62-40.56a8 8 0 0 1 1.25-14.92l192-58.22a8 8 0 0 1 9.86 9.87Z"
      opacity={0.2}
    />
    <Path d="M227.32 28.68a16 16 0 0 0-15.66-4.08h-.15L19.57 82.84a16 16 0 0 0-2.42 29.84l85.62 40.55 40.55 85.62a15.86 15.86 0 0 0 14.42 9.15q.69 0 1.38-.06a15.88 15.88 0 0 0 14-11.51l58.2-191.94v-.15a16 16 0 0 0-4-15.66Zm-69.49 203.17-.05.14-39.36-83.09 47.24-47.25a8 8 0 0 0-11.31-11.31l-47.25 47.24L24 98.22h.14L216 40Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneTiltDuotone);
export default Memo;
