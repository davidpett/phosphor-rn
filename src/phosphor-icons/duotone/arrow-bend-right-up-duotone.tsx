import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendRightUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 80h-96l48-48Z" opacity={0.2} />
    <Path d="m205.66 74.34-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 104 88h40v40a88.1 88.1 0 0 1-88 88 8 8 0 0 0 0 16 104.11 104.11 0 0 0 104-104V88h40a8 8 0 0 0 5.66-13.66ZM123.31 72 152 43.31 180.69 72Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendRightUpDuotone);
export default Memo;
