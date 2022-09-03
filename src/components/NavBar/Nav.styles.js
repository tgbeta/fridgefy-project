import styled from 'styled-components'

export const StyledNavBar = styled.nav `
 a:visited {
 color: #282828;;
}
 nav {
    color: #FFFFFF;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #343434;

    &:hover {
      cursor: pointer;
    }

    button {
      padding: 10px 30px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 10px;
      border: none;
      background-color: #FC7232;
      &:hover {
        cursor: pointer;
        transform: scale(0.9);
        transition: .8s;
      }
    }

    .title {
     color: #FFFFFF;
     text-decoration: none;
     font-size: 2rem;
     font-weight: 700;
     &:hover {
      transform: scale(0.9);
      transition: .8s;
     }
    }

    .route {
      text-decoration: none;
      color: #FFFFFF;
      &:hover {
        transform: scale(0.9);
        text-decoration: underline;
        transition: .8s;
       }
    }
 }


 
`