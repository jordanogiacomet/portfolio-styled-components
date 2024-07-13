import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  padding-top: 0.5rem;  /* py-2 */
  padding-bottom: 0.5rem;  /* py-2 */
  padding-left: 0.75rem;  /* pl-3 */
  padding-right: 1rem;  /* pr-4 */
  color: #ADB7BE;  /* text-[#ADB7BE] */
  border-radius: 0.375rem;  /* rounded */

  @media (${({theme}) => theme.media.sm}) {  /* sm:text-xl */
    font-size: 1.25rem;
  }

  @media (${({theme}) => theme.media.md}) {  /* md:p-0 */
    padding: 0;
  }
`;
