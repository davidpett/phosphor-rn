import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserSwitchBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m252.49 140.49-20 20a12 12 0 0 1-17 0l-20-20a12 12 0 0 1 16.32-17.57A84 84 0 0 0 62.42 75.5a12 12 0 0 1-18.73-15 108 108 0 0 1 192.2 62.69 12 12 0 0 1 16.6 17.31Zm-40.18 55a108 108 0 0 1-192.2-62.69 12 12 0 0 1-16.6-17.31l20-20a12 12 0 0 1 17 0l20 20a12 12 0 0 1-16.32 17.57 83.55 83.55 0 0 0 17.88 46.86 83.48 83.48 0 0 1 29-23.42 52 52 0 1 1 74 0A83.39 83.39 0 0 1 194 180a12 12 0 0 1 18.3 15.49ZM128 148a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0 64a83.6 83.6 0 0 0 48.48-15.37 60 60 0 0 0-96.91-.06A83.53 83.53 0 0 0 128 212Z" />
  </Svg>
);
const Memo = memo(SvgUserSwitchBold);
export default Memo;
