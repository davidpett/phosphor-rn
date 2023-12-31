import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBucketFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M256 204a28 28 0 0 1-56 0c0-23.57 22.06-41.49 23-42.25a8 8 0 0 1 10 0c.94.76 23 18.68 23 42.25Zm-123.51-79.51a12 12 0 1 0-17 0 12 12 0 0 0 17 0Zm97.17-6.66L122.17 10.34a8 8 0 0 0-11.31 0L70.25 51l40.43 40.42a28 28 0 1 1-11.31 11.32L58.94 62.26 15 106.17a24 24 0 0 0 0 33.94L99.89 225a24 24 0 0 0 33.94 0l95.83-95.83a8 8 0 0 0 0-11.34Zm-184-91.49a8 8 0 0 0-11.32 11.32l24.6 24.6L70.25 51Z" />
  </Svg>
);
const Memo = memo(SvgPaintBucketFill);
export default Memo;
