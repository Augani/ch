import styled from 'styled-components';

type SocialPlatformName =
  | 'linkedin'
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'medium'
  | 'youtube'
  | 'reddit';

const SocialMediaIcon = styled.i<{
  platform: SocialPlatformName;
  color?: string;
}>`
  width: 1.875rem;
  height: 1.875rem;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  text-align: center;
  line-height: 1.875rem !important;
  color: var(
    ${props => props.color ?? props.theme.socialMediaColor[props.platform]}
  );
`;

export default SocialMediaIcon;
