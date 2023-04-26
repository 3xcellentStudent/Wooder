import {configureStore} from '@reduxjs/toolkit';

import indexSlice from './indexSlice';
import urlSlice from './urlSlice';

export default configureStore({
   reducer: {
      index: indexSlice,
      url: urlSlice,
   }
})