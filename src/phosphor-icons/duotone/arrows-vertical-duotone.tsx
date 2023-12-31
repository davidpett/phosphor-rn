import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsVerticalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 56H96l32-32Zm-32 176 32-32H96Z" opacity={0.2} />
    <Path d="M160 192h-24V64h24a8 8 0 0 0 5.66-13.66l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 64h24v128H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 192ZM128 35.31 140.69 48h-25.38Zm0 185.38L115.31 208h25.38Z" />
  </Svg>
);
const Memo = memo(SvgArrowsVerticalDuotone);
export default Memo;
