import styled from "styled-components";

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-right: 15px;

    label {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 500;
        color: #5555555;
    }

    input {
        border: 1px solid #AAAAAA;
        border-radius: 8px;
        background-color: #fff;
        height: 36px;
        width: 100%;
        padding: 0 10px;
    }
    
`;