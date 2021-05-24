import { WEATHER_REQUEST_STATUS } from "../../helpers/Constants";
import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE } from "./actions"

const initialState = {
    weather: [],
    request: {
        status: WEATHER_REQUEST_STATUS.IDLE,
        error: "",
    },
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_REQUEST: {
            return {
                ...state,
                request: {
                    status: WEATHER_REQUEST_STATUS.PENDING,
                    error: "",
                }
            }
        }
        case WEATHER_SUCCESS: {
            return {
                ...state,
                weather: action.weather,
                request: {
                    status: WEATHER_REQUEST_STATUS.SUCCESS,
                    error: "",
                }
            }
        }
        case WEATHER_FAILURE: {
            return {
                ...state,
                request: {
                    status: WEATHER_REQUEST_STATUS.FAILURE,
                    error: action.error,
                }
            }
        }
        default:
            return state;
    }
}