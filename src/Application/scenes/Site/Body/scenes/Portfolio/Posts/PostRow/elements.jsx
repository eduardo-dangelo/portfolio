import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin-bottom: 15px;
  
  h1, h2 {
    margin-top: 0;
  }
`;

export const PostRowContainer = styled.div`
  max-width: 800px;
  width: 500%;
  margin-bottom: 15px;
  border: 1px solid grey;
  padding: 15px;
  background: #eeeeee;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  transition: .6s ease;
  box-shadow: 0 4px 4px rgba(0,0,0,0);
  height: 400px;
  
  &:hover {
    box-shadow: 0 4px 14px rgba(0,0,0,0.2);
    background: #ffffff;
  }
`;

export const PostRowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ post }) => post ? post.bg : `grey`};
  border-radius: 50%;
  margin-right: 15px;
  padding: 15px;
  width: 60px;
  height: 60px;
  
  img {
    max-width: 30px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: .9em;
`;

export const ButtonBoxRight = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: none;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left: ${({ ml }) => ml ? `15px` : `0`};
  width: auto;
  color: white;
  border: 1px solid #6c6c6c;
  background: ${({bg}) => bg && bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  transition: .3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    transform: rotateZ(-45deg);
    background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,0));
    position: absolute;
    left: -100%;
    opacity: .2;
  }
  
    
  svg {
    margin-right: 5px;
  }
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    transition: .4s ease;
    
    &:before {
      left: 100%;
    }
  }
`;
