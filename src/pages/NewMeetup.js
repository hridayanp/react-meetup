import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup(){
    function addMeetupHandler(meetupData){
        fetch('https://react-meetup-acaee-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json',
            }
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