import axios from "axios";

export const fetchEvents =  () => {

    // Initiate a post request, to fetch events from API
    axios.get("https://waveli-coding-challenge.herokuapp.com/events/")
    .then(
        (response) => { 
            if (response.status >= 200 && response.status <= 299){ //check for successful status code
                console.log("success: "+JSON.stringify(response.data, null, 2)); // print response
                console.log("success!! length is ",response.data.length);
                response.data.forEach((element: { category: string; id: number; }) => {
                    console.log(element.id,element.category);
                });
            }
        },
        (error) => { // on error, stop loading indicator and stop fetching more data unless refreshed
            console.log("error: "+error);
        }
    );
};

export default fetchEvents;