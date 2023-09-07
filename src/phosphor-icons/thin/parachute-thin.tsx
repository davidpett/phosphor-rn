import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParachuteThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 120a100 100 0 0 0-200 0 4 4 0 0 0 1.3 2.94 2.81 2.81 0 0 0 .3.26L124 194v26h-12a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8h-12v-26l94.4-70.8a4 4 0 0 0 1.6-3.2Zm-8.09-4H172c-1-48.62-19.87-75.14-32-87.21A92.14 92.14 0 0 1 219.91 116ZM128 28.89a76.67 76.67 0 0 1 17 18.75c8.36 12.69 18.27 34.71 19 68.36H92.05c.73-33.65 10.64-55.67 19-68.36A76.47 76.47 0 0 1 128 28.89ZM161.2 124 128 183.76 94.8 124Zm-75.55 0 29.74 53.54L44 124Zm84.7 0H212l-71.39 53.54ZM116 28.79C103.87 40.86 85 67.38 84 116H36.09A92.14 92.14 0 0 1 116 28.79Z" />
  </Svg>
);
const Memo = memo(SvgParachuteThin);
export default Memo;
