import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePodcastsLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 16v32a12 12 0 0 1-24 0V16a12 12 0 0 1 24 0Zm36 36a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12Zm-48 144a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12Zm0-120a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12ZM80 52a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12Zm96 72a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-56a12 12 0 0 0-12-12ZM32 100a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12Zm48 48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12Zm144-48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgGooglePodcastsLogoBold);
export default Memo;
