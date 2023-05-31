import dateFormat from "dateformat"

export const LoadComments = ({ comments }) => {
    return (
        <>
            {comments.map(item => {
                return (
                    <div key={item.id}>
                        <h5>{item.author}</h5>
                        <p>{item.comment}</p>
                        <p>{dateFormat(item.date, 'dddd, mmmm ds,yyyy, h:MM:ss TT')}</p>
                    </div>
                )
            })}
        </>
    )
}