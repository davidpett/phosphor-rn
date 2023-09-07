import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserCircleGearLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m227.25 64.8-5.92-3.41a22 22 0 0 0 0-10.78l5.92-3.41a6 6 0 0 0-6-10.4l-5.93 3.43a22 22 0 0 0-9.32-5.39V28a6 6 0 0 0-12 0v6.84a22 22 0 0 0-9.32 5.39l-5.93-3.43a6 6 0 0 0-6 10.4l5.92 3.41a22 22 0 0 0 0 10.78l-5.92 3.41a6 6 0 0 0 6 10.4l5.93-3.43a22 22 0 0 0 9.32 5.39V84a6 6 0 0 0 12 0v-6.84a22 22 0 0 0 9.32-5.39l5.93 3.43a6 6 0 0 0 6-10.4ZM200 66a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm21.68 40.08a6 6 0 0 0-4.92 6.91A91.76 91.76 0 0 1 218 128a89.65 89.65 0 0 1-24.49 61.64 77.53 77.53 0 0 0-40-31.38 46 46 0 1 0-51 0 77.53 77.53 0 0 0-40 31.38A89.95 89.95 0 0 1 128 38a91.66 91.66 0 0 1 15 1.24 6 6 0 1 0 2-11.83 102 102 0 1 0 50 177.44c.65 1.36 1.68 0 2.34-2.11A102 102 0 0 0 228.59 111a6 6 0 0 0-6.91-4.92ZM94 120a34 34 0 1 1 34 34 34 34 0 0 1-34-34Zm-22.56 78a66 66 0 0 1 113.12 0 89.8 89.8 0 0 1-113.12 0Z" />
  </Svg>
);
const Memo = memo(SvgUserCircleGearLight);
export default Memo;
