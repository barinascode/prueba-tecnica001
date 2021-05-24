import Navigation from '../Navigation'

    interface IPage {
        children : JSX.Element | JSX.Element[];
    }

    const Page = ({ children }:IPage) => {
        
        return  (
            <main className="mt-0 mx-auto max-w-7xl px-4  sm:px-10  lg:px-10 lg:py-10 sm:py-10 xl:py-10 xl:mt-0">
                <Navigation />
                {children}
            </main>
        )
    };

export default Page
