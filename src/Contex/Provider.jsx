import { createContext, useState } from "react";

export const Context = createContext("")

const Provider = ({ children }) => {
    const [searchQuery, setSearchQuery ] = useState("")
    
    const providerinfo = {
        searchQuery,
        setSearchQuery,
    }

    return (
        <Context value={providerinfo}>
            {children}
        </Context>
    );
};

export default Provider;