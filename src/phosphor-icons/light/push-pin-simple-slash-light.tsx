import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPushPinSimpleSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M85.25 40a6 6 0 0 1 6-6H192a6 6 0 0 1 0 12h-8.85l19.17 108.64a6 6 0 0 1-4.86 7 5.41 5.41 0 0 1-1.05.1 6 6 0 0 1-5.9-5L171 46H91.25a6 6 0 0 1-6-6ZM212 220.44a6 6 0 0 1-8.48-.4L169 182h-35v58a6 6 0 0 1-12 0v-58H40a6 6 0 0 1 0-12h11l17.38-98.67L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44ZM158 170 78.58 82.56 63.15 170Z" />
  </Svg>
);
const Memo = memo(SvgPushPinSimpleSlashLight);
export default Memo;
