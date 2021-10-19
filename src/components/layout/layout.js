import styled from "styled-components";

import { Media } from '../../styles/globalStyles';

export const Container_fluid = styled.div`
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled(Container_fluid)`

    ${Media.min_576} {
        max-width: 540px;
    }

    ${Media.min_768} {
        max-width: 720px;
    }

    ${Media.min_992} {
        max-width: 960px;
    }

    ${Media.min_1200} {
        max-width: 1140px;
    }

    ${Media.min_1400} {
        max-width: 1320px;
    }
 
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Col_auto = styled.div`
    flex: 0 1 auto;
    width: auto;
`;

export const Col_1 = styled.div`
    flex: 0 1 auto;
    width: 8.33333333%;
`;

export const Col_2 = styled.div`
    flex: 0 1 auto;
    width: 16.66666667%;
`;

export const Col_3 = styled.div`
    flex: 0 1 auto;
    width: 25%;
`;

export const Col_4 = styled.div`
    flex: 0 1 auto;
    width: 33.33333333%;
`;

export const Col_5 = styled.div`
    flex: 0 1 auto;
    width: 41.66666667%;
`;

export const Col_6 = styled.div`
    flex: 0 1 auto;
    width: 50%;
`;

export const Col_7 = styled.div`
    flex: 0 1 auto;
    width: 58.33333333%;
`;

export const Col_8 = styled.div`
    flex: 0 1 auto;
    width: 66.66666667%;
`;

export const Col_9 = styled.div`
    flex: 0 1 auto;
    width: 75%;
`;

export const Col_10 = styled.div`
    flex: 0 1 auto;
    width: 83.33333333%;
`;

export const Col_11 = styled.div`
    flex: 0 1 auto;
    width: 91.66666667%;
`;

export const Col_12 = styled.div`
    flex: 0 1 auto;
    width: 100%;
`;