
type Props = {
    title: string
    text: string
    image: string
}

export default function Card({ title, text, image }: Props) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{text}</p>
        </div>
    )
}