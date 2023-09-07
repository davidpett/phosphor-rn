import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrashSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 50H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12Zm-22 158a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132ZM82 24a6 6 0 0 1 6-6h80a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6Z" />
  </Svg>
);
const Memo = memo(SvgTrashSimpleLight);
export default Memo;
