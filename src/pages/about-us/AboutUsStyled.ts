import styled from 'styled-components';

const AboutUsStyled = styled.div`
  .container {
    width: ${props => props.theme.sizes.container()};
    margin: 0 auto;
  }

  .hero-section {
    min-height: 25rem;
    background-color: ${props => props.theme.typography.config};
    background-image: url('/assets/images/Slider.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: -4.6875rem;
    display: flex;
    align-items: center;
    h1 {
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.typography.pxToRem(48)};
      font-family: ${props =>
        props.theme.typography.config.fontFamilyRobotoSlab};
      ${props => props.theme.mixins.styledStroke}
    }
  }

  .page-editorial-section {
    background-color: ${props => props.theme.colors.lightGray};
    padding-top: 3.75rem;
    padding-bottom: 1.25rem;
    .container {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }

  .statistics-info-section {
    background-color: ${props => props.theme.colors.lightGray};
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    .statistics-numbers {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      height: 18rem;
      padding-top: 2.375rem;

      &.light-blue-horizontal-gradient {
        background-image: linear-gradient(
          to top,
          rgba(151, 228, 252, 0),
          rgba(146, 246, 252, 0.2),
          rgba(132, 223, 252, 0.3),
          rgba(116, 162, 252, 0.4)
        );
      }

      .statistics-numbers-item {
        width: 12.5rem;
        h1 {
          font-size: 3rem;
          font-family: ${props =>
            props.theme.typography.config.fontFamilyOpenSans};
          font-weight: ${props =>
            props.theme.typography.config.fontWeightExtraBold};
          color: ${props => props.theme.colors.darkBlue};
          margin-top: 0;
          margin-bottom: 1.375rem;
          text-align: center;
        }

        p {
          font-size: 1rem;
          line-height: 1.5;
          text-align: center;
          color: #9495b9;
          margin: 0;
        }
      }
    }

    .statistics-heading {
      padding: 0.4375rem 6.25rem;
      h2 {
        font-size: 2.625rem;
        font-family: ${props =>
          props.theme.typography.config.fontFamilyOpenSans};
        font-weight: ${props =>
          props.theme.typography.config.fontWeightExtraBold};
        line-height: 1.33;
        text-align: center;
        color: ${props => props.theme.colors.darkBlue};
        margin: 0;
      }
    }
  }

  .competitive-advantage-section {
    background-color: ${props => props.theme.colors.darkerBlue};
    background-image: url('/assets/images/Polygon.svg');
    background-position: 98% -3.3125rem;
    background-repeat: no-repeat;
    margin-top: 1.875rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .competitive-advantage-section h3 {
    color: ${props => props.theme.colors.white};
    font-size: 2.25rem;
    font-family: ${props => props.theme.typography.config.fontFamilyRobotoSlab};
    ${props => props.theme.mixins.styledStroke}
  }

  .competitive-advantages {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0 3rem;
  }

  .competitive-advantage-item {
    width: 17.5rem;
    text-align: center;
    .competitive-icon {
      display: inline-block;
    }
    h5 {
      text-transform: capitalize;
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      color: ${props => props.theme.colors.white};
      font-weight: 600;
      font-size: 1.5rem;
      margin-top: 1.25rem;
    }
    p {
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      font-size: 1rem;
      color: ${props => props.theme.colors.white};
      line-height: normal;
      white-space: unset;
      margin-top: 1.125rem;
      margin-bottom: 0;
    }
  }

  .our-team-section {
    background-color: ${props => props.theme.colors.darkGray};
    padding-top: 2.5rem;
    padding-bottom: 5rem;

    h3 {
      margin: 0;
      font-size: 3.3125rem;
      font-family: ${props =>
        props.theme.typography.config.fontFamilyRobotoSlab};
      color: ${props => props.theme.colors.darkBlue};

      ${props => props.theme.mixins.styledStroke};
      ::after {
        top: 2.1875rem;
      }
    }

    h5 {
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      padding-left: 6.25rem;
      font-size: 1.5rem;
    }
  }

  .team-member-list {
    padding: 0 5rem;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .team-member {
    display: flex;
    justify-content: center;
    align-items: center;

    &.direction-vertical {
      width: 13rem;
      flex-direction: column;
      padding: 2rem;

      .member-details {
        h6 {
          padding-bottom: 0.3125rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span.subtitle {
          min-height: 3.125rem;
        }
      }
    }

    &.direction-horizontal {
      flex-direction: row;
      padding: 2rem;
      width: 20rem;

      .member-avatar {
        width: 6.25rem;
        height: 6.25rem;
        margin-right: 1.5625rem;
        margin-bottom: 0;
      }

      .member-details {
        text-align: left;
        h6 {
          padding-bottom: 0;
        }
        p {
          padding-top: 0.5rem;
        }
      }
    }

    .member-avatar {
      width: 8.125rem;
      height: 8.125rem;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      margin-bottom: 1.5625rem;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;

      .social-profile {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: ${props => props.theme.colors.white};
        border-radius: 50%;
      }
    }

    .member-details {
      text-align: center;
      h6 {
        font-size: 1rem;
        font-family: ${props =>
          props.theme.typography.config.fontFamilyOpenSans};
        margin: 0;
        padding-bottom: 0.3125rem;
        text-transform: capitalize;
        font-weight: ${props =>
          props.theme.typography.config.fontWeightSemiBold};
      }
      span.subtitle {
        font-family: ${props =>
          props.theme.typography.config.fontFamilyOpenSans};
        text-transform: capitalize;
        letter-spacing: 0.5px;
        display: block;
      }
      p {
        font-size: 0.8125rem;
        margin: 0;
        text-transform: capitalize;
        color: ${props => props.theme.colors.darkBlue};
        padding-top: 1rem;
      }
    }
  }
`;

export default AboutUsStyled;
