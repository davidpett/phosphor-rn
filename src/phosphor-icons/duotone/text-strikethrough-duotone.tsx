import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextStrikethroughDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m176 72-55.31 51.05c-24-6.7-45.58-14.26-45.58-35 0-22.09 22-40 52.89-40 23.2-.05 40.37 9.59 48 23.95Zm-55.31 51.05L72 168c0 22.09 25.07 40 56 40s56-17.91 56-40c0-29.57-33.48-36.6-63.31-44.95Z"
      opacity={0.2}
    />
    <Path d="M224 128a8 8 0 0 1-8 8h-40.07c9.19 7.11 16.07 17.2 16.07 32 0 13.34-7 25.7-19.75 34.79C160.33 211.31 144.61 216 128 216s-32.33-4.69-44.25-13.21C71 193.7 64 181.34 64 168a8 8 0 0 1 16 0c0 17.35 22 32 48 32s48-14.65 48-32c0-14.85-10.54-23.58-38.77-32H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM76.33 104a8 8 0 0 0 7.61-10.49 17.3 17.3 0 0 1-.83-5.51c0-18.24 19.3-32 44.89-32 18.84 0 34.16 7.42 41 19.85a8 8 0 0 0 14-7.7C173.33 50.52 152.77 40 128 40c-34.71 0-60.89 20.63-60.89 48a33.73 33.73 0 0 0 1.62 10.49 8 8 0 0 0 7.6 5.51Z" />
  </Svg>
);
const Memo = memo(SvgTextStrikethroughDuotone);
export default Memo;
