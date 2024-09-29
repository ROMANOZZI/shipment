import axios from "axios";


export const getShipment=()=>{
   return({type:"GET_SHIPMENT",payload:{
    shipment:null,
    loading:true,
    error:null
   }})
}
export const getShipmentSuccess=(data)=>{
    return({type:"GET_SHIPMENT_SUCCESS",payload:{
        shipment:data,
        loading:false,
        error:null
    }})
}
export const getShipmentFailure=(error)=>{
    return({type:"GET_SHIPMENT_FAILURE",payload:{
        error:error,
        loading:false,
        shipment:null
    }})
}
export const fetchShipment=()=> async (dispatch,getState)=>{
    dispatch(getShipment())
    try{
        const response=await axios.get(import.meta.env.VITE_API_URL+`/${"84043113"}`);
        let color=null;
        let data=response.data;
        switch(response.data.CurrentStatus.state){
            case "DELIVERED":
                data.color="#36b600";
                break;
            case "CANCELLED":
                data.color="#e30613";
                break;
            default:
                data.color="#f9bd0e";
                break;
        }
        /*      red:"#e30613",
      black:"#4f5665",
      yellow:"#f9bd0e",
      green:"#36b600"*/
        dispatch(getShipmentSuccess(data))
    }catch(error){
        dispatch(getShipmentFailure(error))
    }
}
    
