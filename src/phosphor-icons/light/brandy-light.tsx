import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrandyLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 88a93.64 93.64 0 0 0-15.21-51.28 6 6 0 0 0-5-2.72H54.23a6 6 0 0 0-5 2.72A93.64 93.64 0 0 0 34 88a94.1 94.1 0 0 0 88 93.8V218H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-36.2A94.1 94.1 0 0 0 222 88ZM57.56 46h140.88a81.62 81.62 0 0 1 11.34 36H46.22a81.62 81.62 0 0 1 11.34-36ZM128 170a82.09 82.09 0 0 1-81.76-76h163.52A82.09 82.09 0 0 1 128 170Z" />
  </Svg>
);
const Memo = memo(SvgBrandyLight);
export default Memo;
