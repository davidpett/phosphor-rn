import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightbulbFilamentFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104Zm-50.34 2.34a8 8 0 0 0-11.32 0L128 132.69l-26.34-26.35a8 8 0 0 0-11.32 11.32L120 147.31V184a8 8 0 0 0 16 0v-36.69l29.66-29.65a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgLightbulbFilamentFill);
export default Memo;
