import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  interface IEvent {
    category: string; 
    id: number; 
  }

  interface ICategories {
    ungrouped:IEvent[];
    hot:IEvent[];
    soon:IEvent[];
    forYou:IEvent[];
  }

  const initialState:{ [key:string]: ICategories;} = {
    categories:{
      ungrouped:[],
      hot:[],
      soon:[],
      forYou:[],
    },
  };

  export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
      updateCategories:(state, action: PayloadAction<IEvent[]>) => {

        let categories:ICategories = {ungrouped:[],hot:[],soon:[],forYou:[]}

        action.payload.forEach((event: IEvent) => {
          switch(event.category){
            case "na":
              categories.ungrouped.push(event);
              break;
            case "hot":
              categories.hot.push(event);
              break;
            case "soon":
              categories.soon.push(event);
              break;
            case "fy":
              categories.forYou.push(event);
              break;
            default:
              console.log("couldn't infer category of event with id:",event.id)
              break;
          }
        });
        state.categories=categories;
      },
    },
  });
  
  export const { 
    updateCategories,
   } = eventSlice.actions;
  
  export default eventSlice.reducer;