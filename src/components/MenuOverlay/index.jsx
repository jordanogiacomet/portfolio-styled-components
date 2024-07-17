import P from 'prop-types';
import { OverlayMenu } from '../OverlayMenu';
import { Overlay } from '../Overlay';
import { OverlayItem } from '../OverlayItem';
import { NavLink } from '../NavLink';


export const MenuOverlay = ({ links, onClick }) => {
  return (
    <Overlay type='menu-overlay'>
      <OverlayMenu>
        {links.map((link, index) => (
          <OverlayItem key={index}>
            <NavLink href={link.path} onClick={onClick}>{link.title}</NavLink>
          </OverlayItem>
        ))}
      </OverlayMenu>
    </Overlay>
  );
};

MenuOverlay.propTypes = {
  links: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      path: P.string.isRequired,
    })
  ).isRequired,
  onClick: P.func.isRequired,
};