
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@/data/models';
import { StorageKeysEnum } from '@/presentation/utilities';

export interface AuthState {
  loading: boolean,
  userInfo: IUser | null,
  userToken: string | null,
  error: string | null,
  succes: boolean,

}

const localStorage = new LocalStorageProtocol();

export function getCartFormLocalStorage(): AuthState {

  const user = localStorage.get(StorageKeysEnum.user);
  const jwt = localStorage.get(StorageKeysEnum.jwt);
  if (user && jwt) {
    return {
      loading: false,
      userInfo: user,
      userToken: null,
      error: null,
      succes: true,
    };
  }

  return {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    succes: false,
  }

}


export const AuthInitialState: AuthState = getCartFormLocalStorage();



// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: AuthInitialState,
//   reducers: {
//     // login: (state, action): any => action.payload,
//     // // modifyUser: (state, action) => ({ ...state, ...action.payload }),
//     // logout: () => UserInitialState
//   },
//   extraReducers: (builder) => {
//     // ---------Login-------------------------
//     builder.addCase(loginUser.pending, (state, action) => {
//       state.loading = true;
//       state.error = null;
//     })
//     builder.addCase(loginUser.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.succes = true // Login successful
//       if (payload) {
//         state.userInfo = payload;
//       }
//     })

//     builder.addCase(loginUser.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message as string;
//     })

//     // --------------------Logout---------------------
//     builder.addCase(logoutUser.fulfilled, (state, action) => {
//       state.loading = false;
//       state.userInfo = null;
//       state.error = null;
//       state.succes = false;
//       // navegar al inicio
//       // window.location.href = 'https://info-store.vercel.app';
//     })
//   },

// });

// export default authSlice.reducer;


// export const loginUser = createAsyncThunk(
//   'auth/login',
//   // callback function
//   async (toekMauc: string, { rejectWithValue }) => {
//     const userUsecases = new UserRepository();

//     try {
//       const authResp = await userUsecases.auth(toekMauc);
//       console.log('user redux');
//       console.log(authResp.user);
//       localStorage.set(StorageKeysEnum.user, authResp.user);
//       localStorage.set(StorageKeysEnum.jwt, { token: authResp.jwt });

//       return authResp.user;
//     } catch (error: any) {
//       return rejectWithValue(error);
//     }
//   }
// )

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.delete(StorageKeysEnum.user);
  localStorage.delete(StorageKeysEnum.jwt);
  ///////////////////////////////////////////
  return null;
});
