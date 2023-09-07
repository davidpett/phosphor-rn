import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneakerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M255.8 162.93v-.31a43.94 43.94 0 0 0-29.8-37.26l-56.62-20.2-.24-.09a20 20 0 0 1-11.92-10.78L134.06 40l-.06-.16a20.06 20.06 0 0 0-25.11-10.64L33.17 56.73A20.07 20.07 0 0 0 20 75.53V192a20 20 0 0 0 20 20h196a20 20 0 0 0 20-20v-24.94c0-1.39-.07-2.76-.2-4.13ZM113.53 53.05l6 14-15.63 5.67a12 12 0 1 0 8.2 22.55l16.9-6.13 4.54 10.63-13.6 5A12 12 0 0 0 124 128a11.79 11.79 0 0 0 4.1-.73l19.57-7.11a43.86 43.86 0 0 0 13.8 7.64l56.62 20.2.23.08a19.89 19.89 0 0 1 6.84 3.91H44V78.33ZM44 188v-12h188v12Z" />
  </Svg>
);
const Memo = memo(SvgSneakerBold);
export default Memo;
