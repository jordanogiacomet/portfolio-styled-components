/* eslint-disable no-unused-vars */
import P from 'prop-types';
import { useState, useEffect } from 'react';
import * as Styled from './styles';
import { ImageContainer } from '../ImageContainer';
import { Link } from '../Link'; 
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Overlay } from '../Overlay';

export const ProjectCard = ({ imgUrl, title, gitUrl, previewUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleTouch = () => {
      setIsVisible(false);
    };

    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <Styled.Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContainer imgUrl={imgUrl}>
        <Overlay type='project-overlay' className={isHovered ? 'show' : ''}>
          <Link href={gitUrl}>
            <CodeBracketIcon className="icon" />
          </Link>
        </Overlay>
        <Styled.Heading className={isHovered ? 'hide' : 'show'} isVisible={isVisible}>
          {title}
        </Styled.Heading>
      </ImageContainer>
    </Styled.Container>
  );
};

ProjectCard.propTypes = {
  imgUrl: P.string.isRequired,
  title: P.string.isRequired,
  gitUrl: P.string.isRequired,
  previewUrl: P.string.isRequired,
};