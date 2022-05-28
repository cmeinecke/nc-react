import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

<<<<<<< HEAD
const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};
=======
export const selectAllCampsites = () => CAMPSITES;
>>>>>>> bb45aaa6623070b1040444729edc635468fc8a39

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };

<<<<<<< HEAD
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
=======
export const selectCampsiteById = (id) =>
  CAMPSITES.find((campsite) => campsite.id === parseInt(id));

export const selectFeaturedCampsite = () =>
  CAMPSITES.find((campsite) => campsite.featured);
>>>>>>> bb45aaa6623070b1040444729edc635468fc8a39
