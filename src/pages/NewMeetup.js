import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetup(){
    const history= useHistory();
    function addMeetupHandler(meetupData){
        fetch('https://react-meetup-acaee-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json',
            }
        }).then(()=>{
            history.replace('/');
        });
    }
    return(
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}
export default NewMeetup;