import UseNavigation from '../hooks/UseNavigation';

const Route = ( { path, children } ) => {

    const { currentPath } = UseNavigation();
    if ( currentPath === path )
        return children;    

    return null;
}

export default Route