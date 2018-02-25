import styled from 'styled-components';

export const COLORS = {
    black: '#4c4c4c',
    gray: 'rgba(0,0,0,0.54)',
    darkGray: '#676363',
};

/* Only on top component */

export const Layout = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: ${COLORS.black};
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
`;

export const NavbarWrapper = styled.div`
    width: 100%;
`;

/* Shared components */

export const ContentWrapper = styled.main`
    margin: 20px 5px;
`;

export const CenteredWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`;

export const Title = styled.h1`
    font-size: 40px;
    text-transform: capitalize;
`;

export const SubTitle = styled.h3`
    display: block;
    font-size: 20px;
    color: ${COLORS.gray};
 `;

export const SubContentWrapper = styled.div``;

export const SectionHeader = styled.h2`
    font-size: 30px;
    margin: 15px 0;
 `;

export const Paragraph = styled.span`
    color: ${COLORS.darkGray};
    display: ${props => props.display || 'block'};
 `;

export const SuplementaryText = styled.h3`
    font-size: 15px;
    color: ${COLORS.gray};
    display: ${props => props.display || 'block'};
    margin: ${props => props.margin || 'auto' };
`;

export const Strong = styled.strong`
    text-transform: ${props => props.textTransform || 'none' };
 `;

export const TextSection = styled.section`
    font-size: 20px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${COLORS.gray};
`;
