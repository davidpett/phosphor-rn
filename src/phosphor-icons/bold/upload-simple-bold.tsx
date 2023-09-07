import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUploadSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0ZM96.49 88.49 116 69v83a12 12 0 0 0 24 0V69l19.51 19.52a12 12 0 0 0 17-17l-40-40a12 12 0 0 0-17 0l-40 40a12 12 0 0 0 17 17Z" />
  </Svg>
);
const Memo = memo(SvgUploadSimpleBold);
export default Memo;
