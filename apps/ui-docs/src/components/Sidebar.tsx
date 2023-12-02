// @ts-nocheck
import { withRouter, useLocation } from 'react-router-dom';

import { documentations } from '../constants/documentation.constant.ts';

const Sidebar = (props: never) => {
    const { history } = props;
    const location = useLocation();

    const isSelected = (component) =>
        location.pathname === `/components/${component}`;

    return (
        <ul className="h-screen overflow-scroll border-r">
            {documentations.map((documentation) => (
                <li className="p-2 my-1 mx-auto" key={documentation.name}>
                    <span className="text-md font-bold">
                        {documentation.name}
                    </span>

                    <ul className="mt-2">
                        {documentation.components.map((component) => (
                            <li
                                className={`text-base cursor-pointer ${
                                    location.pathname ===
                                    `/components${component.route}`
                                        ? 'text-blue-600'
                                        : ''
                                }`}
                                key={component.route}
                            >
                                <a
                                    href={`/components${component.route}`}
                                    className={`text-sm font-medium transition-colors ${
                                        isSelected(component.route)
                                            ? ''
                                            : 'text-gray-400'
                                    }`}
                                >
                                    {component.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default withRouter(Sidebar);
