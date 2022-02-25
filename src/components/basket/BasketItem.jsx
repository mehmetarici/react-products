import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromBasket } from "../../pages/home/store/actions";
import Modal from "../modal/Modal";

import "./style/BasketItem.scss"

function BasketItem({product,setBasketActive}) {
    const dispatch = useDispatch();
    const [removeModal, setRemoveModal] = useState(false);

    function _deleteFromBasket() {
        dispatch(deleteFromBasket(product.id));
    }

    function openDeleteFromBasketModal() {
        setBasketActive(false);
        setRemoveModal(true);
    }

    return (
        <div className="basket-item">
            <div className="product-image">
                <img src={require(`../../assets/images/${ product.imageName }`)} alt={product.name}/>
            </div>
            <div className="product-description">
                <div className="product-title">
                    <h2>{product.name}</h2>
                    <h2>{product.category}</h2>
                </div>
                <div className="product-action">
                    <button onClick={openDeleteFromBasketModal}>Kaldır</button>
                </div>

            </div>

            <Modal title="Ürünü silmek istediğinize emin misiniz?" onAccept={()=>_deleteFromBasket()} onClose={ () => setRemoveModal(false) } show={ removeModal }>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentiall....
                </p>
            </Modal>
        </div>
    );
}

export default BasketItem;
