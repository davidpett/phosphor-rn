import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 88v104H88Z" opacity={0.2} />
    <Path d="M195.06 80.61a8 8 0 0 0-8.72 1.73L140 128.69 69.66 58.34a8 8 0 0 0-11.32 11.32L128.69 140l-46.35 46.34A8 8 0 0 0 88 200h104a8 8 0 0 0 8-8V88a8 8 0 0 0-4.94-7.39ZM184 184h-76.69l38.34-38.34L184 107.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownRightDuotone);
export default Memo;
