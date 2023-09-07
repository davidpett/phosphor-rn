import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilSimpleSlashBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56.88 31.93a12 12 0 1 0-17.76 16.14l45.64 50.2-50.9 50.9A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.85 19.85 0 0 0 14.14-5.86l47.43-47.42 44.87 49.35a12 12 0 1 0 17.76-16.14ZM91 204H52v-39l48.92-48.92 37.18 40.89ZM230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0l-36 36a12 12 0 0 0 14.55 18.82L175 120l-.54.53a12 12 0 1 0 17 17l38.67-38.67a20 20 0 0 0 .02-28.32ZM192 103l-39-39 18.34-18.34 39 39Z" />
  </Svg>
);
const Memo = memo(SvgPencilSimpleSlashBold);
export default Memo;
