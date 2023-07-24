
import { produce } from "immer";
export const initState = {
    products: [],

} as { products: any[] }

export const reducer = (state = initState, action: any) => {

    return produce(state, (draftState) => {
        switch (action.type) {
            case "fetch_product":
                draftState.products = action.payload
                break;
            case "add_product":
                draftState.products.push(action.payload)
                break;
            case "delete_product":
                draftState.products = draftState.products.filter((item) => item.id !== action.payload)
                break;
            case "update_product":
                draftState.products = draftState.products.map((item) => item.id == action.payload.id ? action.payload : item)
                break;
            default:
                break;
        }
    })

}