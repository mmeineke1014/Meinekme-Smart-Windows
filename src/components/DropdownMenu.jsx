function DropdownMenu({list, title, dropdownStyle}){
    return (
      <select className={dropdownStyle}>
        <option value={title}>{title}</option>
        {list.map((listItem) => <option value={listItem.value}>{listItem.label}</option>)}
      </select>
      );
}

export default DropdownMenu;