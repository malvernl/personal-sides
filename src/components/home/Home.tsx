import "./home.scss";

const Home = () => {
    return (
        <div>
            <div className={`icon-container`}>
                        <div className="icon">
                            <a href="https://wa.me/+60127067266" target="_blank">
                                <img src="/images/shopping-cart.png" alt="Icon 1" />
                                <p>Beli Tepi</p>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://chat.whatsapp.com/HyzxII28HQH8keVrdPep59" target="_blank">
                                <img src="/images/community.png" alt="Icon 2" />
                                <p>Join The Community</p>
                            </a>
                        </div>
            </div>
            <div className={`logo-container`}>
                <img src="/images/Logo1.jpg" alt="Icon Logo"/>
            </div>
        </div>
        
    )    
}

export default Home;