import { AppAction, AppActionType } from './action-types';
import { AppContextValue } from './provider';

export function appReducer(state: AppContextValue, action: AppAction): AppContextValue {
  switch (action.type) {
    // Theme
    case AppActionType.THEME_USER:
      return {
        ...state,
        themeUser: action.payload,
      };
    case AppActionType.THEME_SYSTEM:
      return {
        ...state,
        themeSystem: action.payload,
      };
    case AppActionType.HOME_SECTION_ACTIVE_ADD:
      return {
        ...state,
        activeHomeSections: [action.payload, ...state.activeHomeSections],
      };
    case AppActionType.HOME_SECTION_ACTIVE_REMOVE:
      return {
        ...state,
        activeHomeSections: state.activeHomeSections.filter((s) => s !== action.payload),
      };
    default:
      return state;
  }
}
