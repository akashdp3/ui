// @ts-nocheck
import React from 'react';
import { Button } from '@applifyr/ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'type',
        type: `'submit' | 'button' | 'reset'`,
        default: `'button'`
    },
    {
        name: 'variant',
        type: `'primary' | 'secondary' | 'accent' | 'success' | 'danger' | 'warning'`,
        default: `'secondary'`
    },
    {
        name: 'disabled',
        type: `true | false`,
        default: `false`
    }
];

const ButtonDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Button</p>
            </div>
            <Section>
                <Example title="Sample Button">
                    <Example.Preview>
                        <Button>Sample Button</Button>
                    </Example.Preview>
                    <Example.Code>{`<Button>Sample Button</Button>`}</Example.Code>
                </Example>
            </Section>
            <Section>
                <Block>
                    <h3 className="text-lg font-semibold">Props</h3>
                </Block>
                <Table tableRows={props} />
            </Section>
            <Section>
                <Example title="Variants">
                    <Example.Preview>
                        <div className="flex gap-4">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="accent">Accent</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="warning">Warning</Button>
                        </div>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="accent">Accent</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="warning">Warning</Button>
                        `}
                    </Example.Code>
                </Example>
            </Section>
            <Section>
                <Example title="Disabled">
                    <Example.Preview>
                        <div className="flex gap-4">
                            <Button variant="primary" disabled>
                                Primary
                            </Button>
                            <Button variant="secondary" disabled>
                                Secondary
                            </Button>
                            <Button variant="accent" disabled>
                                Accent
                            </Button>
                            <Button variant="success" disabled>
                                Success
                            </Button>
                            <Button variant="danger" disabled>
                                Danger
                            </Button>
                            <Button variant="warning" disabled>
                                Warning
                            </Button>
                            <Button variant="ghost" disabled>
                                Ghost
                            </Button>
                        </div>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Button variant="primary" disabled>
                                Primary
                            </Button>
                            <Button variant="secondary" disabled>
                                Secondary
                            </Button>
                            <Button variant="success" disabled>
                                Success
                            </Button>
                            <Button variant="danger" disabled>
                                Danger
                            </Button>
                            <Button variant="warning" disabled>
                                Warning
                            </Button>
                            <Button variant="ghost" disabled>
                                Ghost
                            </Button>
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default ButtonDocs;
