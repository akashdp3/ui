// @ts-nocheck
import React from 'react';
import Styled from 'styled-components';

import NavBar from './NavBar';
import Sidebar from './Sidebar';

const Wrapper = Styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
`;

const AppContainer = (props) => {
    const { children, ...others } = props;

    return (
        <div>
            <NavBar {...others} />
            <Wrapper className="px-4 mt-2">
                <Sidebar />
                <div className="mx-16">{children}</div>
            </Wrapper>
        </div>
    );
};

export default AppContainer;
