import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlowerTulip = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 48a87.48 87.48 0 0 0-35.36 7.43c-15.1-25.37-39.92-38-41.06-38.59a8 8 0 0 0-7.16 0c-1.14.58-26 13.22-41.06 38.59A87.48 87.48 0 0 0 48 48a8 8 0 0 0-8 8v40a88.11 88.11 0 0 0 80 87.63v35.43l-36.42-18.22a8 8 0 1 0-7.16 14.32l48 24a8 8 0 0 0 7.16 0l48-24a8 8 0 0 0-7.16-14.32L136 219.06v-35.43A88.11 88.11 0 0 0 216 96V56a8 8 0 0 0-8-8Zm-88 119.56A72.1 72.1 0 0 1 56 96V64.44A72.1 72.1 0 0 1 120 136Zm8-68.2a88.4 88.4 0 0 0-30.64-36.17c9.57-15.79 24-25.9 30.64-30 6.65 4.08 21.08 14.19 30.64 30A88.46 88.46 0 0 0 128 99.36ZM200 96a72.1 72.1 0 0 1-64 71.56V136a72.1 72.1 0 0 1 64-71.56Z" />
  </Svg>
);
const Memo = memo(SvgFlowerTulip);
export default Memo;
