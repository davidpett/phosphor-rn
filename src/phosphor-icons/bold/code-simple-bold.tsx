import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodeSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m96 73-61.94 55L96 183a12 12 0 1 1-16 18L8 137a12 12 0 0 1 0-18l72-64a12 12 0 0 1 16 18Zm152 46-72-64a12 12 0 1 0-16 18l61.91 55L160 183a12 12 0 1 0 16 18l72-64a12 12 0 0 0 0-18Z" />
  </Svg>
);
const Memo = memo(SvgCodeSimpleBold);
export default Memo;
