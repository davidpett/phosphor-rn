import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilSimpleSlashDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M221.66 90.34 192 120l-56-56 29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34Z"
      opacity={0.2}
    />
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l48.2 53L36.68 152A15.89 15.89 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l50.4-50.39 47.69 52.46a8 8 0 1 0 11.84-10.76ZM92.69 208H48v-44.69l53.06-53 42.56 46.81ZM227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0l-41.67 41.67a8 8 0 0 0 11.32 11.31l6.35-6.36L180.69 120l-9 9A8 8 0 0 0 183 140.34L227.32 96a16 16 0 0 0 0-22.63ZM192 108.69 147.32 64l24-24L216 84.69Z" />
  </Svg>
);
const Memo = memo(SvgPencilSimpleSlashDuotone);
export default Memo;
