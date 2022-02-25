import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

function Modal(props) {
    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };

    }, []);

    function closeOnEscapeKeyDown(e) {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    }

    return ReactDOM.createPortal(<CSSTransition
        in={ props.show }
        unmountOnExit
        timeout={ {enter: 0, exit: 300} }>
        <div className="modal" onClick={ props.onClose }>
            <div className="modal-content" onClick={ e => e.stopPropagation() }>
                <div className="modal-header">
                    <h4 className="modal-title">{ props.title }</h4>
                </div>
                <div className="modal-body">{ props.children }</div>
                <div className="modal-footer">
                    <button onClick={ props.onAccept } className="button ok-button">
                        Evet
                    </button>
                    <button onClick={ props.onClose } className="button cancel-button">
                        Hayır
                    </button>
                </div>
            </div>
        </div>
    </CSSTransition>, document.getElementById("root"));
}

export default Modal;
