import { THEME_MODE } from '@/constants/config';
import { ACTION, Action } from './App.actionTypes';
import { ContextValue } from './App.context';

export function appReducer(state: ContextValue, action: Action): ContextValue {
  switch (action.type) {
    // Theme
    case ACTION.THEME_MODE:
      return {
        ...state,
        theme: {
          ...state.theme,
          user: action.payload,
          selected:
            state.theme.system && action.payload === THEME_MODE.SYSTEM
              ? state.theme.system
              : action.payload,
        },
      };
    case ACTION.THEME_MODE_SYSTEM:
      return {
        ...state,
        theme: {
          ...state.theme,
          system: action.payload,
        },
      };
    case ACTION.HOME_SECTION_ACTIVE_ADD:
      return {
        ...state,
        activeHomeSections: [action.payload, ...state.activeHomeSections],
      };
    case ACTION.HOME_SECTION_ACTIVE_REMOVE:
      return {
        ...state,
        activeHomeSections: state.activeHomeSections.filter((s) => s !== action.payload),
      };
    default:
      return state;
  }
}
