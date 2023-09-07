import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfinityFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-11.72 116.28a40 40 0 0 1-56.4.17l-50.59-45.11L97 111a24 24 0 1 0 0 34c.36-.36.71-.73 1-1.1a8 8 0 1 1 12 10.6c-.55.62-1.13 1.23-1.71 1.81a40 40 0 1 1-.17-56.73l50.58 45.11.33.31a24 24 0 1 0-.03-34c-.36.36-.7.72-1 1.1a8 8 0 0 1-12-10.59c.54-.62 1.12-1.24 1.71-1.82a40 40 0 0 1 56.57 56.56Z" />
  </Svg>
);
const Memo = memo(SvgInfinityFill);
export default Memo;
