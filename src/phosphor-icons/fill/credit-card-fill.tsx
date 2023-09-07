import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCreditCardFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm-88 128h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm64 0h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16ZM32 88V64h192v24Z" />
  </Svg>
);
const Memo = memo(SvgCreditCardFill);
export default Memo;
