import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTramBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 44h-44V28h28a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h28v16H72a36 36 0 0 0-36 36v104a36 36 0 0 0 36 36l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220a36 36 0 0 0 36-36V80a36 36 0 0 0-36-36ZM72 68h112a12 12 0 0 1 12 12v36H60V80a12 12 0 0 1 12-12Zm112 128H72a12 12 0 0 1-12-12v-44h136v44a12 12 0 0 1-12 12Zm-80-28a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm80 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgTramBold);
export default Memo;
