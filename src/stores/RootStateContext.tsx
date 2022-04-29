import React from 'react'
import CartStore from './cartStore';
import FilterStore from './filterStore';
import PaintingsStore from './paintingsStore';
type TRootStateContext = {
    filterStore: FilterStore
cartStore: CartStore
paintingsStore: PaintingsStore
}
const RootStateContext = React.createContext<TRootStateContext>(
    {} as TRootStateContext

)
export const stores = {
cartStore: new CartStore(),
filterStore: new FilterStore(),
paintingsStore: new PaintingsStore()
}

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
children
}) =>{
    return (
        <RootStateContext.Provider value={stores}>
        {children}
        </RootStateContext.Provider>
    )
}

export const useRootStore = ()=> React.useContext(RootStateContext)