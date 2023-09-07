import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrainLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 124a54.13 54.13 0 0 0-32-49.33V72a46 46 0 0 0-86-22.67A46 46 0 0 0 42 72v2.67a54 54 0 0 0 0 98.63v2.7a46 46 0 0 0 86 22.67A46 46 0 0 0 214 176v-2.7a54.07 54.07 0 0 0 32-49.3ZM88 210a34 34 0 0 1-34-32.94 53.67 53.67 0 0 0 10 .94h8a6 6 0 0 0 0-12h-8a42 42 0 0 1-14-81.61 6 6 0 0 0 4-5.66V72a34 34 0 0 1 68 0v73.05A45.89 45.89 0 0 0 88 130a6 6 0 0 0 0 12 34 34 0 0 1 0 68Zm104-44h-8a6 6 0 0 0 0 12h8a53.67 53.67 0 0 0 10-.94A34 34 0 1 1 168 142a6 6 0 0 0 0-12 45.89 45.89 0 0 0-34 15.05V72a34 34 0 0 1 68 0v6.73a6 6 0 0 0 4 5.66A42 42 0 0 1 192 166Zm14-54a6 6 0 0 1-6 6h-4a34 34 0 0 1-34-34v-4a6 6 0 0 1 12 0v4a22 22 0 0 0 22 22h4a6 6 0 0 1 6 6Zm-146 6h-4a6 6 0 0 1 0-12h4a22 22 0 0 0 22-22v-4a6 6 0 0 1 12 0v4a34 34 0 0 1-34 34Z" />
  </Svg>
);
const Memo = memo(SvgBrainLight);
export default Memo;
