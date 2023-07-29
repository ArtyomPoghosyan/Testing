export const Footer = ({handleDelete}) => {
    return (
        <div>
            <span>1/4</span>
            <button onClick={handleDelete}>delete Checked</button>
        </div>
    )
}