import styled, { css } from 'styled-components'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    ${props => props.fixed && css`
    {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgbs(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto; /* centrado horizontal*/
        max-width: 400px;
        padding: 5px;
        position: fixed;/*fijo para el scroll*/
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
    }
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`
