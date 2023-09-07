import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPentagramLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.29 91.67A13.8 13.8 0 0 0 224 82h-62.52l-20.15-62.13a13.93 13.93 0 0 0-26.64-.05L94.51 82H32a14 14 0 0 0-8.21 25.35l50.65 36.44-19.39 59.84a13.78 13.78 0 0 0 5.09 15.64 13.77 13.77 0 0 0 16.43 0l51.43-37 51.41 37A14 14 0 0 0 201 203.63l-19.42-59.85 50.67-36.46a13.79 13.79 0 0 0 5.04-15.65ZM126.11 23.49a1.94 1.94 0 0 1 3.79 0l19 58.46h-41.77ZM30.85 97.61a1.86 1.86 0 0 1-.73-2.23A1.88 1.88 0 0 1 32 94h58.62l-12.26 37.8Zm38.69 112a2 2 0 0 1-3.08-2.24l18.23-56.2 33 23.77Zm19-70.42L103.24 94h49.52l14.65 45.16L128 167.51Zm100.95 68.18a2 2 0 0 1-3.1 2.22l-48.12-34.69 33-23.77Zm35.68-109.78-47.53 34.2L165.38 94H224a1.86 1.86 0 0 1 1.9 1.39 1.83 1.83 0 0 1-.73 2.2Z" />
  </Svg>
);
const Memo = memo(SvgPentagramLight);
export default Memo;
