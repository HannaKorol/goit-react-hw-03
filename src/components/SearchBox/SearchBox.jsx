import s from "./SearchBox.module.css"

export default function SearchBox({value, onFilter} ) {
    return (
        <div className={s.searchWrapper}>
            <p className={s.lable}>Find contacts by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} /> 
        </div>
    );
}


//Щоб зробити input контрольованим елементом, потрібно виконати два кроки:
//Атрибуту value потрібно передати значення стану inputValue.
//При події onChange отримати значення поля і записати його в стан inputValue.