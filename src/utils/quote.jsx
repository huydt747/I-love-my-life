import "../css/quote.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Quote() {
    
    return (
        <div className="home-quote">
            <div className="inner inner-one">
                <div className="box">
                    <div className="triangle"></div>
                    <div className="text">
                        <i className="start-quote fas fa-quote-left"></i>
                        <p className="quote">
                            Tâm điểm kết nối <br />
                            Mở lối thành công.
                        </p>
                        <p className="credit">Ths.Bs PHAN THÀNH TRINH</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Quote;
