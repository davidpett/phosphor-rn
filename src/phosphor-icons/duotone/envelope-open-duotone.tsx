import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEnvelopeOpenDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224 96-78.55 56h-34.9L32 96l96-64Z" opacity={0.2} />
    <Path d="m228.44 89.34-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66ZM96.72 152 40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61-67 47.78h-29.8l-67-47.78Z" />
  </Svg>
);
const Memo = memo(SvgEnvelopeOpenDuotone);
export default Memo;
