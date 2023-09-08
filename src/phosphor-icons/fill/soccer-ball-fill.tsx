import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSoccerBallFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm8 39.38 24.79-17.05a88.41 88.41 0 0 1 36.18 27l-8 26.94c-.2 0-.41.1-.61.17l-22.82 7.41a7.59 7.59 0 0 0-1 .4L136 88.62V63.38ZM95.24 46.33 120 63.38V88.62l-28.56 19.67a7.59 7.59 0 0 0-1-.4l-22.82-7.41c-.2-.07-.41-.12-.61-.17l-8-26.94a88.41 88.41 0 0 1 36.23-27.04Zm-13 129.09H53.9a87.4 87.4 0 0 1-13.79-43.07l22-16.88a5.77 5.77 0 0 0 .58.22l22.83 7.42a7.83 7.83 0 0 0 .93.22l10.79 31.42c-.15.18-.3.36-.44.55l-14.1 19.41a7.8 7.8 0 0 0-.46.71ZM150.69 213a88.16 88.16 0 0 1-45.38 0l-10.06-28.4c.13-.16.27-.31.39-.48l14.11-19.42a7.66 7.66 0 0 0 .46-.7h35.58a7.66 7.66 0 0 0 .46.7l14.11 19.42c.12.17.26.32.39.48Zm23.07-37.61a7.8 7.8 0 0 0-.46-.71l-14.11-19.38c-.14-.19-.29-.37-.44-.55l10.79-31.42a7.83 7.83 0 0 0 .93-.22l22.83-7.42a5.77 5.77 0 0 0 .58-.22l22 16.88a87.4 87.4 0 0 1-13.79 43.07Z" />
  </Svg>
);
const Memo = memo(SvgSoccerBallFill);
export default Memo;
