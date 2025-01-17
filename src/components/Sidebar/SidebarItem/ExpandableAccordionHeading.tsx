import React, { useState } from 'react';
import cn from 'classnames';
import { AccordionItemButton, AccordionItemHeading, AccordionItemState } from 'react-accessible-accordion';

import { ROOT_LEVEL } from '../consts';
import { ExpandableIndicator } from '../ExpandableIndicator';

import { expanded } from './ExpandableAccordionHeading.module.css';

export type AccordionHeadingProps = {
  label: React.ReactNode;
  level: number;
  expandable?: boolean;
  collapsible?: boolean;
};

export const ExpandableAccordionHeading = ({ label, level }: AccordionHeadingProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AccordionItemHeading aria-level={level || ROOT_LEVEL}>
      <AccordionItemButton
        className={cn('flex items-center justify-between', {
          [expanded]: isExpanded,
        })}
      >
        {label}
        <AccordionItemState>
          {({ expanded }) => {
            if (expanded !== undefined && expanded !== isExpanded) {
              setIsExpanded(expanded);
            }
            return <ExpandableIndicator expanded={expanded} />;
          }}
        </AccordionItemState>
      </AccordionItemButton>
    </AccordionItemHeading>
  );
};
