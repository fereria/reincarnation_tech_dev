import React from 'react';

export default function Highlight({url}) {
  return (
    <span>
        <blockquote class="twitter-tweet"><a href="{url}"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </span>
  );
}