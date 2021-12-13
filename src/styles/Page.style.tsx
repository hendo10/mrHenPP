import styled from 'styled-components';

interface StyleProps {
    isVisible?: boolean;
}

export const MainContainer = styled.div<StyleProps>`
    display: flex;
    background-color: ${(props) => (props.isVisible ? 'rgba(0,0,0,0.5)' : 'white')};
    width: '100%';
    height: 100vh;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 11%;
`;

export const StyledTitle = styled.p`
    color: #262626;
    font-size: 52px;
    font-weight: 800;
    margin-block-start: 0;
    margin-block-end: 20px;
`;

export const StyledSecondaryTitle = styled.p`
    color: #262626;
    font-size: 33px;
    font-weight: 600;
    opacity: 0.65;
    margin-block-start: 0;
    margin-block-end: 20px;
`;

export const StyledText = styled.p`
    color: #262626;
    font-size: 19px;
    line-height: 30px;
    margin-block-start: 0;
    margin-block-end: 20px;
    opacity: 0.65;
`;

export const StyledTextList = styled.div`
    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 10px;
        padding: 0;
        overflow: visible;
        list-style: none;
        word-wrap: bread-word;
        word-break: break-all;
        margin-block-start: 0;
        font-size: 19px;
        opacity: 0.65;
        color: #262626;
        
        li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        
            &:before {
                content: '▹';
                position: absolute;
                left: 0;
                line-height: 20px;
            }
        }
    }
`;