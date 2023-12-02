// @ts-nocheck
import { TooltipProvider } from '@/components/ui/tooltip.tsx';

import Routes from './routes/Routes.tsx';

const App = () => {
    return (
        <TooltipProvider>
            <Routes />
        </TooltipProvider>
    );
};

export default App;
