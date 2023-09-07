import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePodcastsLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 16v32a4 4 0 0 1-8 0V16a4 4 0 0 1 8 0Zm44 44a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4Zm-48 144a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4Zm0-120a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4ZM80 60a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4Zm96 72a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4ZM32 108a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4Zm48 48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4Zm144-48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgGooglePodcastsLogoThin);
export default Memo;
