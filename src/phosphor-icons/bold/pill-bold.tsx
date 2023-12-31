import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPillBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M219.26 36.77a57.28 57.28 0 0 0-81 0L36.77 138.26a57.26 57.26 0 0 0 81 81l101.49-101.52a57.33 57.33 0 0 0 0-80.97ZM100.78 202.26a33.26 33.26 0 1 1-47-47L96 113l47 47Zm101.5-101.49L160 143l-47-47 42.27-42.26a33.26 33.26 0 0 1 47 47Zm-9.77-25.26a12 12 0 0 1 0 17l-24 24a12 12 0 1 1-17-17l24-24a12 12 0 0 1 17 0Z" />
  </Svg>
);
const Memo = memo(SvgPillBold);
export default Memo;
