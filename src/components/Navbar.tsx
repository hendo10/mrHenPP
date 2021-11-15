import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
    const ResumeLink = (
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
    );

    return (
        <div>
            <StyledLinks> 
                <ol>About</ol>
                <ol>Projects</ol>
                <ol>Contact</ol>
                <div>{ResumeLink}</div>
            </StyledLinks>
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