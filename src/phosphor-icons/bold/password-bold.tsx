import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPasswordBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0Zm82.73 50.7L116 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52 9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52 14.72-4.79a12 12 0 1 0-7.41-22.82Zm111.12 7.7a12 12 0 0 0-15.12-7.7L212 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52 9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52 14.72-4.79a12 12 0 0 0 7.71-15.12Z" />
  </Svg>
);
const Memo = memo(SvgPasswordBold);
export default Memo;
