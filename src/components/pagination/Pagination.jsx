import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../pages/home/store/actions";
import "./Pagination.scss"

function Pagination() {
    const dispatch = useDispatch();
    const {pagination} = useSelector((state) => state.productStore)

    function _changePagination(page) {
        dispatch(setPagination({...pagination, page}))
    }

    return <div className="pagination">
        <p onClick={ () => pagination.page > 0 && _changePagination(pagination.page - 1) }>&lt;</p>
        { [...Array(pagination.pageCount)].map((_, i) =>
            <p className={ pagination.page === i ? "active" : "" } onClick={ () => _changePagination(i) } key={ i }>{ i + 1 }</p>)
        }
        <p onClick={ () => pagination.page < pagination.pageCount - 1 && _changePagination(pagination.page + 1) }>&gt;</p>
    </div>
}

export default Pagination;
