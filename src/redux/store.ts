import { configureStore } from '@reduxjs/toolkit';
import { AuthState } from './states/auth';
// import { AuthState, authSlice } from './states/auth';
import { snackbarSlice, SnackbarState } from './states/snackbar';


export interface AppStore {
  auth: AuthState,
  snackbar: SnackbarState,
}

// export default configureStore<AppStore>({
//   reducer: {
//     auth: authSlice.reducer,
//     snackbar: snackbarSlice.reducer,
//   }
// });
