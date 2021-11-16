import React from 'react';
import styled from 'styled-components';

export default function About() {
    return (
        <div>
            <a>About me</a>
        </div>
    )
}

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }

  ol {
    font-size: 22;
  }
  
  .resume-button {
    margin-left: 15px;
    font-size: 50;
  }
`;