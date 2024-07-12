const Banner = () => {
    const bannerStyle = {
        background: 'url("https://fastly.picsum.photos/id/866/1200/400.jpg?hmac=V0hqejFNTg6y8iVymlNIBWVbLrbAyc4hxrT8jWrcfbE") no-repeat center center',
        backgroundSize: 'cover',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center',
    }
    


    return (
        <div style={bannerStyle}>
            <div className="">
                <h1 className="display-4 text-danger">Bem-vindo ao Meu Site</h1>
                <p className="lead text-danger">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero fugit asperiores doloribus nulla harum, error natus quae sit, corrupti adipisci aperiam deleniti quo veniam molestiae tempora quasi, maxime excepturi!</p>
            </div>
        </div>
    )
}

export default Banner;