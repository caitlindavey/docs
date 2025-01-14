import React from 'react';
import { Link } from 'gatsby';
import { SidebarHeading, SidebarHeadingProps } from './';

const onPageNav = /[#?]/;

type SidebarLinkProps = {
  to: string;
  children: React.ReactNode;
  alwaysExpanded?: boolean;
  expandable?: boolean;
} & SidebarHeadingProps<any>;

export const SidebarLink = ({ to, alwaysExpanded = false, expandable = false, ...props }: SidebarLinkProps) => {
  if (expandable && !alwaysExpanded) {
    return <SidebarHeading href={to} {...props} />;
  }

  return onPageNav.test(to) ? (
    /**
     *  Relevant page of documentation: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#recommendations-for-programmatic-in-app-navigation
     *  "If you need this (in-app navigation) behavior, you should either use an anchor tag or import the navigate helper from gatsby"
     */
    <SidebarHeading as="a" href={to} {...props} />
  ) : (
    <SidebarHeading as={Link} to={to} {...props} />
  );
};
