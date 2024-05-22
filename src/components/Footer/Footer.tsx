/**
 * Imports library
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports Icons from library fortawesome/free-brands-svg-icons
 */
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Imports Icons from library fortawesome/free-solid-svg-icons
 */
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Import styled
 */
import {
  FooterContainer,
  SocialWrapper,
  SocialParagraph,
  IconLink,
  RowWrapper,
  ColumnWrapper,
  ColumnHeading,
  RightsWrapper,
  Link,
  ContactInfo,
  IconWrapper,
  Underline,
  ContainerParagraph,
  Paragraph,
} from "./Fotter.styles";

/**
 * Display the component
 */
export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialWrapper>
        <ContainerParagraph className="container-paragraph">
          <SocialParagraph>
            Get connected with us on social networks:
          </SocialParagraph>
        </ContainerParagraph>
        <div className="container-icon">
          <IconLink href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
          <IconLink href="https://www.twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
          <IconLink href="https://www.google.com" target="_blank">
            <FontAwesomeIcon icon={faGoogle} />
          </IconLink>
          <IconLink href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
          <IconLink href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink href="https://www.github.com" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
        </div>
      </SocialWrapper>
      <RowWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            INFORMATION
            <Underline />
          </ColumnHeading>
          <Paragraph>About Vali-Shop</Paragraph>
          <Paragraph>Benefits</Paragraph>
          <Paragraph>Shipping</Paragraph>
          <Paragraph>Return</Paragraph>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            SUPPORT
            <Underline />
          </ColumnHeading>
          <Paragraph>Warranty</Paragraph>
          <Paragraph>Cookies information</Paragraph>
          <Paragraph>Privacy Policy</Paragraph>
          <Paragraph>Terms and Conditions</Paragraph>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            USEFUL LINKS
            <Underline />
          </ColumnHeading>
          <Paragraph>Your Account</Paragraph>
          <Paragraph>Become an Affiliate</Paragraph>
          <Paragraph>Shipping Rates</Paragraph>
          <Paragraph>Help</Paragraph>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            CONTACT
            <Underline />
          </ColumnHeading>
          <ContactInfo>
            <FontAwesomeIcon icon={faHouse} />
            <IconWrapper>Romania</IconWrapper>
          </ContactInfo>
          <ContactInfo>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <Link href="mailto:bocanel.valerica92@gmail.com">
              bocanel.valerica92@gmail.com
            </Link>
          </ContactInfo>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <Link href="tel:+40741412636">+4 0741 41 26 36</Link>
          </p>
        </ColumnWrapper>
      </RowWrapper>
      <RightsWrapper>©2023 Copyright: Valerica Bocanel</RightsWrapper>
    </FooterContainer>
  );
};
