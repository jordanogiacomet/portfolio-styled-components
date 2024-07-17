import P from 'prop-types';
import { OverlayMenu } from '../OverlayMenu';
import { Overlay } from '../Overlay';
import { OverlayItem } from '../OverlayItem';
import { NavLink } from '../NavLink';


export const MenuOverlay = ({ links }) => {
  return (
    <Overlay type='menu-overlay'>
      <OverlayMenu>
        {links.map((link, index) => (
          <OverlayItem key={index}>
            <NavLink href={link.path}>{link.title}</NavLink>
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
};