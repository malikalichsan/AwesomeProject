// import { loginReducer } from "../Screens/LoginScreen/reducer";
// import { dashboardReducer } from "../Screens/DashboardScreen/reducer";
// import { memberRegisterReducer } from "../Screens/MemberRegisterScreen/reducer";
// import { checkInManualReducer } from "../Screens/CheckinManualScreen/reducer";
// import { uploadStructReducer } from "../Screens/UploadStructScreen/reducer";

export const SET_GLOBAL_DATA = "SET_GLOBAL_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
export const SET_USER_DATA = 'SET_USER_DATA';

const defaultState = {
  userData: {},
  dashboardData: {},
  registerMemberFormCache: {},
  registerMemberSubmitQueue: [],
  checkinCityCache: [],
  globalData: {},
  uploadFormCache: {},
  uploadFormSubmitQueue: []
};

const appReducer = (state = defaultState, action) => {
  // state login reducer
  // let _state = loginReducer(state, action);
  // _state = dashboardReducer(_state, action);
  // _state = memberRegisterReducer(_state, action);
  // _state = checkInManualReducer(_state, action);
  // _state = uploadStructReducer(_state, action);
  let _state;

  switch (action.type) {
    case SET_GLOBAL_DATA:
      _state = {
        ...state,
        globalData: action.globalData
      };
      break;
    case SET_USER_DATA:
      _state = {
        ...state,
        userData: action.userData
      };
      break;
    case CLEAR_DATA:
      _state = {
        ...defaultState,
        globalData: {
          username: _state.globalData.username,
          password: _state.globalData.password,
          checkboxValue: _state.globalData.checkboxValue,
        }
      }
      break;
  }

  state = { ...state, ..._state }

  return state;
};

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export { defaultState, rootReducer };
