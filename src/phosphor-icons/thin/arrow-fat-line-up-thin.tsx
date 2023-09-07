import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLineUpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m226.83 117.17-96-96a4 4 0 0 0-5.66 0l-96 96A4 4 0 0 0 32 124h44v60a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-60h44a4 4 0 0 0 2.83-6.83ZM176 116a4 4 0 0 0-4 4v60H84v-60a4 4 0 0 0-4-4H41.66L128 29.66 214.34 116Zm4 100a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLineUpThin);
export default Memo;
