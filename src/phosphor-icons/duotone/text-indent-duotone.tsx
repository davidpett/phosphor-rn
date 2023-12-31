import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextIndentDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m80 96-40 40V56Z" opacity={0.2} />
    <Path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8ZM112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16Zm104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16ZM32 136V56a8 8 0 0 1 13.66-5.66l40 40a8 8 0 0 1 0 11.32l-40 40A8 8 0 0 1 32 136Zm16-19.31L68.69 96 48 75.31Z" />
  </Svg>
);
const Memo = memo(SvgTextIndentDuotone);
export default Memo;
