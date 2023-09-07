import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonSimpleWalkBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 84a36 36 0 1 0-36-36 36 36 0 0 0 36 36Zm0-48a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm68 112a12 12 0 0 1-12 12c-37 0-55.27-18.47-70-33.3-1.71-1.72-3.36-3.4-5-5l-8.63 19.85L159 166.23a12 12 0 0 1 5 9.77v56a12 12 0 0 1-24 0v-49.83l-25.37-18.12L83 236.78a12 12 0 1 1-22-9.57l50.06-115.13q-10.64.75-25 8.4a159.78 159.78 0 0 0-29.83 21.23 12 12 0 0 1-16.43-17.5c2.61-2.45 64.36-59.67 104.09-25.18 3.94 3.42 7.64 7.16 11.22 10.78C168.43 123.28 181 136 208 136a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgPersonSimpleWalkBold);
export default Memo;
