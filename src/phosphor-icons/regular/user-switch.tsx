import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserSwitch = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m253.66 133.66-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L216 132.69V128A88 88 0 0 0 56.49 76.67a8 8 0 0 1-13-9.34A104 104 0 0 1 232 128v4.69l10.34-10.35a8 8 0 0 1 11.32 11.32Zm-41.18 55A104 104 0 0 1 24 128v-4.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32L40 123.31V128a87.62 87.62 0 0 0 22.24 58.41 79.66 79.66 0 0 1 36.06-28.75 48 48 0 1 1 59.4 0 79.59 79.59 0 0 1 36.08 28.78 89.68 89.68 0 0 0 5.71-7.11 8 8 0 0 1 13 9.34ZM128 152a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0 64a88.2 88.2 0 0 0 53.92-18.49 64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216Z" />
  </Svg>
);
const Memo = memo(SvgUserSwitch);
export default Memo;
