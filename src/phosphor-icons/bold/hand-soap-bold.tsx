import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandSoapBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 97.68V92a36 36 0 0 0-36-36h-12V36h28a4 4 0 0 1 4 4 12 12 0 0 0 24 0 28 28 0 0 0-28-28h-64a12 12 0 0 0 0 24h12v20h-12a36 36 0 0 0-36 36v5.68A44.06 44.06 0 0 0 36 140v76a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-76a44.06 44.06 0 0 0-32-42.32ZM104 80h48a12 12 0 0 1 12 12v4H92v-4a12 12 0 0 1 12-12Zm92 132H60v-72a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20Z" />
  </Svg>
);
const Memo = memo(SvgHandSoapBold);
export default Memo;
