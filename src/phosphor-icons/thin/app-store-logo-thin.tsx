import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAppStoreLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m60.9 194-9.46 16a4 4 0 1 1-6.88-4L54 190a4 4 0 0 1 6.9 4ZM232 156h-50.08L150 102a4 4 0 1 0-6.89 4.07L204.56 210a4 4 0 1 0 6.88-4.07l-24.79-42H232a4 4 0 0 0 0-8Zm-89.53 0h-59.1l72.07-122a4 4 0 1 0-6.88-4L128 64.75 107.44 30a4 4 0 1 0-6.88 4l22.79 38.58L74.08 156H24a4 4 0 0 0 0 8h118.47a4 4 0 1 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgAppStoreLogoThin);
export default Memo;
