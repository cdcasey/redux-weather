import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            console.log("ACTION:", action.payload.data);

            // return state.concat([action.paylod.data]);
            return [action.paylod.data, ...state];
        // default:
        //     break;
    }
    return state;
}