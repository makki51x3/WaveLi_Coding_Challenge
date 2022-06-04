import axios from "axios";
import { Dispatch, AnyAction } from "redux";

import { updateCategories } from '../../redux/features/eventSlice';

export const fetchEvents =  (dispatch: Dispatch<AnyAction>) => {

    // Initiate a post request, to fetch events from API
    axios.get("https://waveli-coding-challenge.herokuapp.com/events/")
    .then(
        (response) => { 
            if (response.status >= 200 && response.status <= 299){ //check for successful status code
                // console.log("success: "+JSON.stringify(response.data, null, 2)); // print response
                dispatch(updateCategories(response.data));
            }
        },
        (error) => { // on error, stop loading indicator and stop fetching more data unless refreshed
            console.log("error: "+ error);
        }
    );
};

export default fetchEvents;