import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyMehFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24ZM92 96a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm76 72H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Zm-4-48a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgSmileyMehFill);
export default Memo;
