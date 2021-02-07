import React, {FC, createContext} from 'react';
import userData from '../../userData.json'; //HACK: Just to emulate data already fetched fom DB

export const UserDataContext = createContext(userData);

const DataContextProvider: FC = ({children}) => {
  return <UserDataContext.Provider value={userData}>{children}</UserDataContext.Provider>;
};

export default DataContextProvider;
