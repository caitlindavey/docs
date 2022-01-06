const MINIMIZE_REGEX = /^minimize\.\s*(.*)$/m;
const INDENTATION_REGEX = /^(\s+).*$/m;

const MINIMIZED_HEADINGS_REGEX = /^(h[1-6])(\(#[^\)]+\))?\(minimize(?:=([^\)]*))?\)\.(.*?)\n\n(.+?)(?=(?:\n\nh[1-6])|(?:\Z))/mg;

const stripComments = content => content.replace(/<!--[\s\S]*?-->\s*/g, '');

// borgar-textile does not handle nested divs; we replace these strings with divs with appropriate classes
// while rehydrating in React
const collapsibleWrapper = '{{DIV_collapsible-wrapper}}\n';
const collapsibleContent = '{{DIV_collapsible-content}}\n';
const collapsibleInner = '{{DIV_collapsible-inner}\n\n';
const collapsibleInnerEnd = '\n\n{{DIV_collapsible-inner_END}}\n';
const collapsibleContentEnd = '{{DIV_collapsible-content_END}}';
const collapsibleWrapperEnd = '{{DIV_collapsible-wrapper_END}}\n\n';

const addMinimizeForHeadings = content => {
    let expandNum = 0;
    const replacer = (_match, hTag, anchor, expandTitle, title, innerContent) => {
        ++expandNum;
        const fullExpandTitle = expandTitle ? "+ View More" : `+ ${ expandTitle }`;
        const result =
            `${hTag}${anchor}.${title}\n\n` +
            collapsibleWrapper +
                `<input id='collapsible-heading${expandNum}' class='minimize-checkbox toggle' type='checkbox'/>\n` +
                `<label for='collapsible-heading${expandNum}' class='label-collapsible'>${fullExpandTitle}</label>\n` +
                collapsibleContent +
                    collapsibleInner +
                        innerContent +
                    collapsibleInnerEnd +
                `<label for='collapsible-heading${expandNum}' class='label-collapsible-close'>- View Less</label>` +
                collapsibleContentEnd +
            collapsibleWrapperEnd;
        return result;
    };
    return content.replace(MINIMIZED_HEADINGS_REGEX, replacer);
};

const addMinimizedIndent = content => {
    let expandNum = 0;
    let position = content.search(MINIMIZE_REGEX);
    while(position && position > -1) {
        const next = position + 1;
        const matchTitle = `+ ${ (content.match(MINIMIZE_REGEX)[1] ?? 'View More') }`;
        const nextContent = content
            .slice(position)
            .replace(MINIMIZE_REGEX, '')
            .slice(1); // & remove newline

        const nextIndentationResult = nextContent.match(INDENTATION_REGEX);
        if(!nextIndentationResult || !nextIndentationResult[1]) {
            throw `minimize. blocks must be followed by indentation. Offending block: '${nextContent.slice(0,127)}'\n`;
        }
        
        const nextIndentation = nextIndentationResult[1];
        const indentationRegexString = `^${nextIndentation}(.*)$`
        const indentationRegex = new RegExp(indentationRegexString, 'gm');
        const negativeIndentationRegexString = `^(?!${nextIndentation}).*$`;
        const negativeIndentationRegex = new RegExp(negativeIndentationRegexString, 'gm');
        
        const nextNonIndentedLineLocation = nextContent.search(negativeIndentationRegex);

        const nextContentWithOnlyIndentedLines = nextContent.slice(0,nextNonIndentedLineLocation);
        content = content.substring(0, position) +
            collapsibleWrapper +
                `<input id='collapsible-indent${expandNum}' class='minimize-checkbox toggle' type='checkbox'>` +
                `<label for='collapsible-indent${expandNum}' class='label-collapsible'>${matchTitle}</label>` +
                collapsibleContent +
                    collapsibleInner +
                        `${ nextContentWithOnlyIndentedLines.replace(indentationRegex, '$1') }` +
                    collapsibleInnerEnd +
                    `<label for='collapsible-indent#{expand_num}' class='label-collapsible-close'>- View Less</label>` +
                collapsibleContentEnd +
            collapsibleWrapperEnd +
            content.substring(position + nextNonIndentedLineLocation);
        const nextPosition = nextContent.search(MINIMIZE_REGEX);
        position = nextPosition === -1 ? -1 : nextPosition + next;
        ++expandNum;
    }

    return content;
};

module.exports = {
    stripComments,
    addMinimizedIndent,
    addMinimizeForHeadings
}