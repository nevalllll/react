import React from 'react'

type Props = {}

export default function Card({ }: Props) {
    return (
        <div className="Card">
            <h2>Susi</h2>
            <img src="https://picsum.photos/200/300" alt="Hero" />
            <p> made by Neval</p>
        </div>
    )
}