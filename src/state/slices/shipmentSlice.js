// shipmentSlice.js
const initialState = {
    shipment: null,
    loading: false,
    error: null,
  };
  
  const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_SHIPMENT":
        return {
          ...state,
          loading: true,
          error: null,
          shipment: null,
        };
      case "GET_SHIPMENT_SUCCESS":
        return {
          ...state,
          loading: false,
          shipment: action.payload.shipment,
          error: null,
        };
      case "GET_SHIPMENT_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          shipment: null,
        };
      default:
        return state;
    }
  };
  
  export default shipmentReducer;
  