import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrashSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 52H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8Zm-20 156a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136ZM84 24a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4Z" />
  </Svg>
);
const Memo = memo(SvgTrashSimpleThin);
export default Memo;
