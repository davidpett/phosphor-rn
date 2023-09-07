import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAddressBookBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 20H64a20 20 0 0 0-20 20v20H32a12 12 0 0 0 0 24h12v32H32a12 12 0 0 0 0 24h12v32H32a12 12 0 0 0 0 24h12v20a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20Zm-4 192H68V44h136Zm-103.2-40.63a48 48 0 0 1 70.4 0 12 12 0 0 0 17.6-16.32 72 72 0 0 0-19.21-14.68 44 44 0 1 0-67.19 0 72.12 72.12 0 0 0-19.2 14.68 12 12 0 0 0 17.6 16.32ZM116 112a20 20 0 1 1 20 20 20 20 0 0 1-20-20Z" />
  </Svg>
);
const Memo = memo(SvgAddressBookBold);
export default Memo;
