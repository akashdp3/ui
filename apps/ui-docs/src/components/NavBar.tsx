import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from '@/components/ui/tooltip.tsx';

const NavBar = () => (
    <div className="flex-col md:flex">
        <div className="border-b">
            <div className="flex h-16 item-center px-4">
                <a className="mr-12 my-auto text-lg font-bold" href="/">
                    Applifyr
                </a>
                <nav className="flex my-auto item-center space-x-4 lg:space-x-6">
                    <Tooltip>
                        <TooltipTrigger>
                            <a
                                href="/documentation"
                                className="text-sm font-medium transition-colors text-gray-400"
                            >
                                Documentation
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Coming Soon...</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <a
                                href="/components"
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                Components
                            </a>
                        </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <a
                                href="/themes"
                                className="text-sm font-medium transition-colors text-gray-400"
                            >
                                Themes
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Coming Soon...</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <a
                                href="/playground"
                                className="text-sm font-medium transition-colors text-gray-400"
                            >
                                Playground
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Coming Soon...</p>
                        </TooltipContent>
                    </Tooltip>
                </nav>
            </div>
        </div>
    </div>
);

export default NavBar;
