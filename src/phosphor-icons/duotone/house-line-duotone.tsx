import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHouseLineDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 115.54V216h-64v-56a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v56H40V115.54a8 8 0 0 1 2.62-5.92l80-75.54a8 8 0 0 1 10.77 0l80 75.54a8 8 0 0 1 2.61 5.92Z"
      opacity={0.2}
    />
    <Path d="M240 208h-16v-92.45a16 16 0 0 0-5.17-11.78l-80-75.48a1.14 1.14 0 0 1-.11-.11 16 16 0 0 0-21.53 0l-.11.11-79.91 75.48A16 16 0 0 0 32 115.55V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16ZM48 115.55l.11-.1L128 40l79.9 75.43.11.1V208H160v-48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v48H48ZM144 208h-32v-48h32Z" />
  </Svg>
);
const Memo = memo(SvgHouseLineDuotone);
export default Memo;
