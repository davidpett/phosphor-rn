import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandEyeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 184a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm76-68v36a92 92 0 0 1-184 0V76a32 32 0 0 1 40-31v-1a32 32 0 0 1 60.79-14A32 32 0 0 1 180 60v25a32 32 0 0 1 40 31Zm-24 0a8 8 0 0 0-16 0 12 12 0 0 1-24 0V60a8 8 0 0 0-16 0v44a12 12 0 0 1-24 0V44a8 8 0 0 0-16 0v68a12 12 0 0 1-24 0V76a8 8 0 0 0-16 0v76a68 68 0 0 0 136 0Zm-68 12a55.8 55.8 0 0 0-49.89 30.54 12 12 0 0 0 21.37 10.92 32 32 0 0 1 57 0 12 12 0 0 0 10.73 6.54 11.83 11.83 0 0 0 5.45-1.32 12 12 0 0 0 5.23-16.14A55.8 55.8 0 0 0 128 128Z" />
  </Svg>
);
const Memo = memo(SvgHandEyeBold);
export default Memo;
