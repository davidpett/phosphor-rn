import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFootprintsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 162H48a6 6 0 0 0-6 6v12a34 34 0 0 0 68 0v-12a6 6 0 0 0-6-6Zm-6 18a22 22 0 0 1-44 0v-6h44ZM76 18c-10.8 0-21.44 9.91-30 27.9-13.66 28.82-18.29 71.53 0 93.9a6 6 0 0 0 4.65 2.2h50.53a6 6 0 0 0 4.65-2.2c18.32-22.37 13.69-65.08 0-93.9C97.41 27.91 86.77 18 76 18Zm22.23 112H53.74c-10.09-15.18-11.69-47.65 3.14-79C64.24 35.51 71.77 30 76 30s11.75 5.51 19.1 21c14.82 31.35 13.22 63.82 3.13 79ZM208 186h-56a6 6 0 0 0-6 6v12a34 34 0 0 0 68 0v-12a6 6 0 0 0-6-6Zm-6 18a22 22 0 0 1-44 0v-6h44Zm-47.27-38h50.53a6 6 0 0 0 4.65-2.2c18.32-22.37 13.69-65.08 0-93.9C201.44 51.91 190.8 42 180 42s-21.43 9.91-30 27.9c-13.66 28.82-18.29 71.53 0 93.9a6 6 0 0 0 4.75 2.2Zm6.17-91c7.35-15.53 14.88-21 19.1-21s11.74 5.51 19.1 21c14.83 31.31 13.23 63.78 3.14 79h-44.47c-10.09-15.18-11.69-47.65 3.15-79Z" />
  </Svg>
);
const Memo = memo(SvgFootprintsLight);
export default Memo;
