import {createContext, useState} from 'react';

const FavoritesContext= createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: favoriteMeetup=>{},
    removeFavorite: meetupId=>{},
    itemIsFavorite: meetupId=>{}
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites]= useState([]);
    
    function addFavortiteHandler(favoriteMeetup){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup=> meetup.id !== meetupId);
        });
    }

    function itemsIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=> meetup.id === meetupId);
    }
    const context= {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavortiteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemsIsFavoriteHandler
    };
    return(
        <FavoritesContext.Provider value={context} >
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;