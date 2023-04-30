import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import HelloWorld from '@site/src/components/sample.js';
import { TwitterTweetEmbed } from "react-twitter-embed";
import Gist from "react-gist";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  HelloWorld,
  Gist,
  TwitterTweetEmbed
};