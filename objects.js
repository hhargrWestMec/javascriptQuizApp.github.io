const question1 = {
    question: 'You want to create a CSS style that will modify the strong tag to apply blue color and 60% transparency. Which of the following code fragments will do this?',
    ans1: 'strong { color: rgba(0%,0%,100%,40%); }',
    ans2: 'strong { color: rgba(0,0,255,60); }',
    ans3: 'strong { color: #0000ff, 60%; }',
    ans4: 'strong { color: rgba(0,0,255, 0.40); }', //correct answer
    exp: 'The correct code fragment is strong { color: rgba(0,0,255, 0.40); } RGBA color values are supported in IE9+, Firefox 3+, Chrome, Safari, and Opera 10+. RGBA color values are an extension of RGB color values with an alpha channel, which specifies the opaci the object. An RGBA color value is specified with Pgba(red, green, blue, alpha). The color values is a number between 0 (black) and 255 (white). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque). So, a 60% transp would be represented by 40% opaque.',
    correct: '4'
}

const question2 = {
    question: 'Which is true about absolute positioning?',
    ans1: 'The element is positioned relative to its parent element',
    ans2: 'The element can float right or left',
    ans3: 'The element is positioned relative to the upper-left corner of the browser', //correct
    ans4: 'The element is positioned relative to the upper-left corner of the computer display window',
    exp: 'An element with absolute positioning is located relative to the upper-left corner of the browser.',
    correct: '3'
}

const question3 = {
    question: 'What is the main purpose of CSS in HTML5?',
    ans1: 'CSS is used to determine style, positioning, and layout of a page', //correct
    ans2: 'CSS is used for scripting on an HTML web Page',
    ans3: 'CSS is used to define content on a page.',
    ans4: 'None of these',
    exp: 'CSS is used to determine style, positioning, and layout of a page, irrespective of the content. Using CSS, developers can add visual effects to any element, move items to different locations on the page, and control the flow of the document. All of the content of a page is defined and stored within HTML.',
    correct: '1'
}

const question4 = {
    question: 'Which box model establishes content alignment, direction, and orientation?',
    ans1: 'Parent Box Model',
    ans2: 'Inheritance Box Model',
    ans3: 'Fixed Box Model',
    ans4: 'Flexible Box Model', //correct
    exp: 'The Flexible Box Model establishes content alignment, direction, and orientation, including the ability to align child content horizontally and vertically. Unused space can be assigned to a specific child or distributed among several child elements. It is optimized for interface design.',
    correct: '4'
}

const question5 = {
    question: 'Which is the correct method to define a block element as a grid?',
    ans1: 'grid: true;',
    ans2: 'display: grid;', //correct
    ans3: 'show: grid;',
    ans4: 'None of these',
    exp: 'Grids can be block-level or inline and are used to help organize the layout of the site without resorting to table formatting. Grid lines can be defined in CSS allowing the content of the page to align itself easily to these markers.',
    correct: '2'
}

const question6 = {
    question: 'What is the correct syntax for a CSS comment?',
    ans1: '/* Comment Goes Here */', //correct
    ans2: '.(Comment Goes Here)',
    ans3: '// Comment Goes Here',
    ans4: '# Comment Goes Here #',
    exp: 'A comment is added to a CSS file with the "/*» identifier and a closing "*/". This serves as both a multi-line comment and a single-line comment.',
    correct: '1'
}

const question7 = {
    question: 'Which statement is true about about positioning floated elements?',
    ans1: 'The element can float up or down',
    ans2: 'The element is positioned relative to the upper-left corner of the browser',
    ans3: 'The element is positioned relative to its parent element', //correct
    ans4: 'The element is positioned relative to the upper-left corner of the open window',
    exp: 'A floated element is positioned relative to its parent element and can be pushed to either the right or left side of the parent. Any element that follows the floated element will flow around the other side.',
    correct: '3'
}

const question8 = {
    question: 'How does the Flexible Box Model eliminate the need for using float?',
    ans1: 'By positioning all objects at the coordinates 0,0',
    ans2: 'By allowing the browser to position the objects',
    ans3: 'By positioning objects relative to a parent object',
    ans4: 'By providing a container positioned by properties assigned', //correct
    exp: 'The Flexible Box Model eliminates the need for using float by including a container that automatically "floats" based on the properties assigned, such as box-align after, box-pack justify, box-orient vertical, and so on.',
    correct: '4'
}

const question9 = {
    question: 'Which CSS style positions an element relative to the browser window?',
    ans1: 'position: static;',
    ans2: 'position: relative;',
    ans3: 'position: fixed;', //correct
    ans4: 'position: absolute;',
    exp: 'An element with a fixed position is positioned relative to the browser window and will not move even if the window is scrolled: <br> Example: p.pos_fixed { <br> position: fixed; <br> top: 30px; <br> right: 5px; }',
    correct: '3'
}

const question10 = {
    question: 'What is the purpose of the "flex-flow" property?',
    ans1: 'Flex-flow ONLY determines whether or not the child boxes will wrap to a new line upon running out of space.',
    ans2: 'Flex-flow allows the designer to set both the flex-direction and flex-wrap properties with a single line of code.', //correct
    ans3: 'Flex-flow defines the alignment of child boxes (top, center, bottom) within the flex box.',
    ans4: 'None of these.',
    exp: 'The flex-flow attribute allows developers to define both the flex-direction and flex-wrap properties with a single line of code. The syntax is "flex-flow: <flex-direction> <flex-wrap»>" The flex-direction property allows developers to define how flex items are arranged in the container. Possible options are row, row-reverse, column, column-reverse. The flex-wrap property allows developers to define whether the flex container is a single or multi-line container. Possible options are nowrap, wrap, wrap-reverse.',
    correct: '2'
}
