import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSnowflakeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm42.37 119.22 18.94-6.76a8 8 0 1 1 5.38 15.08l-15.48 5.52 4.52 16.87a8 8 0 0 1-5.66 9.8 8.23 8.23 0 0 1-2.07.27 8 8 0 0 1-7.73-5.93l-5.57-20.8-26.7-15.41v30.83l13.66 13.65a8 8 0 0 1-11.32 11.32L128 187.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L120 172.69v-30.83l-26.7 15.41-5.57 20.8A8 8 0 0 1 80 184a8.23 8.23 0 0 1-2.07-.27 8 8 0 0 1-5.66-9.8l4.52-16.87-15.48-5.52a8 8 0 0 1 5.38-15.08l18.94 6.76L112 128l-26.37-15.22-18.94 6.76A8.18 8.18 0 0 1 64 120a8 8 0 0 1-2.69-15.54l15.48-5.52-4.52-16.87a8 8 0 0 1 15.46-4.14l5.57 20.8 26.7 15.41V83.31l-13.66-13.65a8 8 0 0 1 11.32-11.32L128 68.69l10.34-10.35a8 8 0 0 1 11.32 11.32L136 83.31v30.83l26.7-15.41 5.57-20.8a8 8 0 0 1 15.46 4.14l-4.52 16.87 15.48 5.52A8 8 0 0 1 192 120a8.18 8.18 0 0 1-2.69-.46l-18.94-6.76L144 128Z" />
  </Svg>
);
const Memo = memo(SvgSnowflakeFill);
export default Memo;
