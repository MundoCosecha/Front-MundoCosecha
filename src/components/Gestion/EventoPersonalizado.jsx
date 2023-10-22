
export const EventItem = ({ info }) => {
    const { event } = info;
    console.log(event);
    return (
        <div>
            {<p>{event?.title}</p>}
        </div>
    );
};


