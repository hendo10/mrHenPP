import React from 'react';
import PropTypes from 'prop-types';
import IconGitHub from './github';
import IconTwitter from './twitter';
import IconLinkedin from './linkedin';

const Icon = (name: string) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    // default:
    //   return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;