import { GatsbyLinkProps, Link } from 'gatsby';
import React, { ReactElement } from 'react';
import Html from '../Html';
import GenericHtmlBlock from '../Html/GenericHtmlBlock';
import { DOCUMENTATION_NAME } from '../../../../data/transform/constants';
import { HtmlAttributes, HtmlComponentProps } from '../../html-component-props';

import './styles.css';
import Img from './Img';
import { filterAttribsForReact } from 'src/react-utilities';

const StyledGatsbyLink = ({ to, children, ...props }: Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'>) => (
  <Link className="docs-link" data-testid="gatsby-link" to={to} {...props}>
    {children}
  </Link>
);

const A = ({ data, attribs }: HtmlComponentProps<'a'>): ReactElement => {
  const rawHref = attribs?.href;

  // If there is an image inside the link with src same as href, then nuke <a> and render <img> only
  if (Array.isArray(data)) {
    const imageElement = data.find((item) => item.name === 'img');
    if (imageElement) {
      const attribs = imageElement.attribs as HtmlAttributes<'img'>;
      if (attribs?.src === rawHref && imageElement?.data) {
        return <Img attribs={filterAttribsForReact(attribs)} data={imageElement?.data} />;
      }
    }
  }

  if (rawHref && /^(\/|https?:\/\/(?:www.)?ably.com\/docs).*/.test(rawHref)) {
    let href = rawHref;
    if (/^\/(?!docs\/).*/.test(rawHref)) {
      href = `/${DOCUMENTATION_NAME}${rawHref}`;
    }

    return (
      <StyledGatsbyLink to={href} {...{ ...attribs }}>
        <Html data={data} />
      </StyledGatsbyLink>
    );
  }
  return GenericHtmlBlock('a')({ data, attribs: { ...attribs, className: 'docs-link' } });
};

export default A;
