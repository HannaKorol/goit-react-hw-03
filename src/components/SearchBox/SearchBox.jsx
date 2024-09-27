import s from "./SearchBox.module.css"

export default function SearchBox({value, onFilter} ) {
    return (
        <div>
            <p className={s.lable}>Find contacts by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
        </div>
    );
}