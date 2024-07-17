import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';
import { ImageContainer } from '../ImageContainer';
import { Link } from '../Link'; // Certifique-se de que está importando corretamente
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Overlay } from '../Overlay';

export const ProjectCard = ({ imgUrl, title, gitUrl, previewUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

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
          <Link href={previewUrl}>
            <EyeIcon className="icon" />
          </Link>
        </Overlay>
        <Styled.Heading className={isHovered ? 'hide' : 'show'}>
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