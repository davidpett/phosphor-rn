import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePlayLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.79 110.7 58 14.65a20.24 20.24 0 0 0-20.12.06A19.62 19.62 0 0 0 28 31.84v192.32a19.62 19.62 0 0 0 9.91 17.13 20.22 20.22 0 0 0 20.12.06l167.76-96a19.76 19.76 0 0 0 0-34.6ZM52 203V53l75 75Zm92-58 12.4 12.4-58 33.2ZM98.41 65.43l58 33.2L144 111ZM178 145l-17-17 17-17 29.72 17Z" />
  </Svg>
);
const Memo = memo(SvgGooglePlayLogoBold);
export default Memo;
