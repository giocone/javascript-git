const Cards = () => {
    const cardData = [
        {
            title: "Titulo 1",
            subtitle: "Subtitulo 1",
            text: "Este é o texto do primeiro card",
            img: "https://placehold.co/300x200/png"
        },
        {
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
            text: "Este é o texto do segundo card",
            img: "https://placehold.co/300x200/png"
        },
        {
            title: "Titulo 3",
            subtitle: "Subtitulo 3",
            text: "Este é o texto do terceiro card",
            img: "https://placehold.co/300x200/png"
        }
    ];

    console.log(cardData)

    return (
        <div className="row">
            {cardData.map((card, index) => (
                    <section key={index} className="col-md-4">
                        <article className="card">
                            <div className="card-body">
                                <img src={card.img} alt={card.title} className="card-img-top"/>
                                <h5 className="card-title pt-3 pb-2">
                                    {card.title}
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {card.subtitle}
                                </h6>
                                <p className="card-text">
                                    {card.text}
                                </p>
                            </div>
                        </article>
                    </section>
            ))}
        </div>
    )
}

export default Cards;