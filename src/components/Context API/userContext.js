import React from 'react'

export const UserContext=React.createContext('No Context Value');
export const UserProvider=UserContext.Provider;
export const UserConsumer=UserContext.Consumer;

// export Provider
// export Consumer