import storageKeys from "../../constant/storage-keys";
import userApi from "../../api/userApi";
import adminStorageKeys from "../../constant/admin-storage-keys";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const register = createAsyncThunk("user/register", async (payload) => {
  //call API to register
  const data = await userApi.register(payload);
  //save data to localstorage
  localStorage.setItem(storageKeys.TOKEN, data.jwt);
  localStorage.setItem("user", data);
  //return user data
  return data;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  //call API to login
  const data = await userApi.login(payload);
  //save data to localstorage
  // localStorage.setItem("user", JSON.stringify(data));
  localStorage.setItem(storageKeys.TOKEN, data.accesstoken);
  localStorage.setItem(storageKeys.USER, JSON.stringify(data.ruser));
  //return user data
  return data;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(storageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      //clear localstorage
      //remove token
      localStorage.removeItem(storageKeys.TOKEN);
      localStorage.removeItem(storageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
