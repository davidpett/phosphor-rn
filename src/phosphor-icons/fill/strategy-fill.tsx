import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStrategyFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 188a36 36 0 1 1-36-36 36 36 0 0 1 36 36Zm-69.66-70.34a8 8 0 0 0 11.32 0L60 103.31l14.34 14.35a8 8 0 0 0 11.32-11.32L71.31 92l14.35-14.34a8 8 0 0 0-11.32-11.32L60 80.69 45.66 66.34a8 8 0 0 0-11.32 11.32L48.69 92l-14.35 14.34a8 8 0 0 0 0 11.32Zm173 70.34 14.35-14.34a8 8 0 0 0-11.32-11.32L196 176.69l-14.34-14.35a8 8 0 0 0-11.32 11.32L184.69 188l-14.35 14.34a8 8 0 0 0 11.32 11.32L196 199.31l14.34 14.35a8 8 0 0 0 11.32-11.32ZM157.66 50.34 155.31 48H176a8 8 0 0 0 0-16h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0V59.31l2.34 2.35c17.93 17.93 17.9 35.4 14.71 46.9-4.64 16.77-19.36 31.77-35 35.68A8 8 0 0 0 128 160a8.13 8.13 0 0 0 2-.24c21.21-5.3 40.35-24.6 46.53-46.93 6.05-22.05-.63-44.24-18.87-62.49Z" />
  </Svg>
);
const Memo = memo(SvgStrategyFill);
export default Memo;
