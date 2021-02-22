import { EditAttributesTwoTone } from '@material-ui/icons';
import React from 'react'

const userContext = React.createContext(
    {
    user: {},
    cambiarUser: ()=>{}
    }); // Create a context object

export {
  userContext // Export it so it can be used by other Components
};