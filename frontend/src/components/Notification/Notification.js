import './Notification.css'

const Notification = ({title, message, type="error", onClose}) => {
    return (
        <div className="notification" id={type}>
            <span id="closebtn" onClick={onClose}>&times;</span>
            <strong>{title}</strong> {message}
        </div>
    )
}

export default Notification;