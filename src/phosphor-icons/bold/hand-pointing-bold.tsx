import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandPointingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 84a31.94 31.94 0 0 0-11.22 2A32 32 0 0 0 140 69V44a32 32 0 0 0-64 0v66.83A32 32 0 0 0 24.25 148l4.68 8.24C63.11 216.48 78.72 244 128 244a92.1 92.1 0 0 0 92-92v-36a32 32 0 0 0-32-32Zm8 68a68.08 68.08 0 0 1-68 68c-34 0-43.49-14.45-78.2-75.65l-4.69-8.28a.16.16 0 0 1 0-.07 8 8 0 0 1 13.86-8c.06.12.13.23.2.35l18.68 30A12 12 0 0 0 100 152V44a8 8 0 0 1 16 0v68a12 12 0 0 0 24 0v-12a8 8 0 0 1 16 0v20a12 12 0 0 0 24 0v-4a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgHandPointingBold);
export default Memo;
