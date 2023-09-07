import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePodcastsLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 16v32a8 8 0 0 1-16 0V16a8 8 0 0 1 16 0Zm40 40a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8Zm-48 144a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8Zm0-120a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8ZM80 56a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8Zm96 72a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8ZM32 104a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8Zm48 48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8Zm144-48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgGooglePodcastsLogo);
export default Memo;
