import React from 'react';

const Content = props =>
  <div>
    <h3>Content</h3>
    <blockquote>{props.quote.quote}</blockquote>
    <blockquote><h5>- {props.quote.character}</h5></blockquote>
    <blockquote><button onClick={props.fetch}>Get New Quote</button></blockquote>
  </div>;

export default Content;