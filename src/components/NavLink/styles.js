import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  padding-top: 0.5rem;  /* py-2 */
  padding-bottom: 0.5rem;  /* py-2 */
  padding-left: 0.75rem;  /* pl-3 */
  padding-right: 1rem;  /* pr-4 */
  color: #ADB7BE;  /* text-[#ADB7BE] */
  border-radius: 0.375rem;  /* rounded */
  text-decoration: none;
  transition: ease-in-out 0.3s;
  
  &.light{
    color: white;
    &:hover{
      color: #CCCCCC;
    }
  }
  
  &:hover{
    color: #4169E1;
  }
  @media (min-width: 768px) {
    margin-left: 15px;
  }

  @media (${({theme}) => theme.media.sm}) {  /* sm:text-xl */
    font-size: 1.8rem;
  }

  @media (${({theme}) => theme.media.md}) {  /* md:p-0 */
    padding: 0;
  }
`;
