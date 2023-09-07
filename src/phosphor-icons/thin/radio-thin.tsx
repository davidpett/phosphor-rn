import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 176a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Zm-4-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm132-52v112a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V80a4 4 0 0 1 2.85-3.81l160-48a4 4 0 0 1 2.3 7.66L59.25 76H216a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4H36v116a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Zm-24 56a36 36 0 1 1-36-36 36 36 0 0 1 36 36Zm-8 0a28 28 0 1 0-28 28 28 28 0 0 0 28-28Zm-92-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgRadioThin);
export default Memo;
