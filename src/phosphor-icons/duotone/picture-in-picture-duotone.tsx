import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPictureInPictureDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 64v64h-80a8 8 0 0 0-8 8v64H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 64h176v56h-72a16 16 0 0 0-16 16v56H40Zm176 128h-72v-56h72v56Z" />
  </Svg>
);
const Memo = memo(SvgPictureInPictureDuotone);
export default Memo;
