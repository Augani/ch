import styled from 'styled-components';

const SocialIcon = styled.i`
  width: 1.875rem;
  height: 1.875rem;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  text-align: center;
  line-height: 1.875rem !important;
  color: ${props => props.theme.colors.white};

  &.linkedin-icon {
    background-color: ${props => props.theme.socialMediaColor.linkedin};
  }

  &.twitter-icon {
    background-color: ${props => props.theme.socialMediaColor.twitter};
  }

  &.facebook-icon {
    background-color: ${props => props.theme.socialMediaColor.facebook};
  }

  &.instagram-icon {
    background-color: ${props => props.theme.socialMediaColor.instagram};
  }

  &.medium-icon {
    background-color: ${props => props.theme.socialMediaColor.medium};
  }

  &.youtube-icon {
    background-color: ${props => props.theme.socialMediaColor.youtube};
  }

  &.reddit-icon {
    background-color: ${props => props.theme.socialMediaColor.reddit};
  }
`;

export default SocialIcon;
