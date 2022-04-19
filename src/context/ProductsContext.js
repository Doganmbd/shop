import React,{createContext} from 'react' ;


export const PC = createContext();

const ProductsContext = ({children}) => {
  return (
    <PC.Provider value={products}>
        {children}
    </PC.Provider> 
  )
}

export default ProductsContext