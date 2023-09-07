import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFinnTheHumanFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-84-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm148-64v80a72.08 72.08 0 0 1-72 72H88a72.08 72.08 0 0 1-72-72V64a32 32 0 0 1 63-8h98a32 32 0 0 1 63 8Zm-40 72a32 32 0 0 0-32-32H88a32 32 0 0 0-32 32v8a32 32 0 0 0 32 32h80a32 32 0 0 0 32-32Z" />
  </Svg>
);
const Memo = memo(SvgFinnTheHumanFill);
export default Memo;
