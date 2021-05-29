import {createContext, useState} from 'react';

const FavoritesContext= createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites]= useState([]);
    
    function addFavortitesHandler(favoriteMeetup){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoritesHandler(meetupId){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup=> meetup.id !== meetupId);
        });
    }

    function itemsIsFavoritesHandler(meetupId){
        return userFavorites.some(meetup=> meetup.id === meetupId);
    }
    const context= {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };
    return(
        <FavoritesContext.Provider value={context} >
            {props.children}
        </FavoritesContext.Provider>
    );
}