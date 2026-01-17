import styled from "styled-components";


export const Root = styled.table`
    width: 100%;
    background: #ffffff;
    border-radius: 20px;
    border-collapse: collapse;
`;

export const Header = styled.thead`
    border-bottom: 2px solid #cdcdcd;
`;

export const Body = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    padding: 16px;
    color: #3a3f3dff;
    text-align: left;
    font-weight: 400;
    border-radius: 40px;
    border-bottom: 2px solid #cdcdcd;
    background-color: #262299ff;

    &:last-child {
        border-top-right-radius: 20px;
    }
    &:first-child {
        border-top-left-radius: 20px;
    }
`;

export const Td = styled.td`
    padding: 16px;
    color: #484848;
    font-weight: 500;
    line-height: 115%;
`;