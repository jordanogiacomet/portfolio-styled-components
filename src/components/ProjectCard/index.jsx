import P from 'prop-types';
import * as Styled from './styles';
import { ImageContainer } from '../ImageContainer';
import { Link } from '../Link';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import { ProjectContent } from '../ProjectContent';
import { Heading } from '../Heading';
import { ProjectOverlay } from '../ProjectOverlay';

export const ProjectCard = ({ imgUrl, title, gitUrl, previewUrl }) => {
  return (
    <Styled.Container>
      <ImageContainer imgUrl={imgUrl}>
        <ProjectOverlay>
          <Link href={gitUrl} className="group">
              <CodeBracketIcon className="icon"/>
            </Link>
            <Link href={previewUrl} className="group">
              <EyeIcon className="icon"/>
          </Link>
        </ProjectOverlay>  
        <ProjectContent>
          <Heading colorDark={false} size='small'>{title}</Heading>
        </ProjectContent>
      </ImageContainer>
    </Styled.Container>
  );
};

ProjectCard.propTypes = {
  imgUrl: P.string.isRequired,
  title: P.string.isRequired,
  description: P.string.isRequired,
  gitUrl: P.string.isRequired,
  previewUrl: P.string.isRequired,
};