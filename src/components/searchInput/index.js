import React from "react";

const SearchInput = ({ placeholder, searchValue, onChangeHandle, onKeyDownHandle, onBlurHandle, onFocusHandle }) => (
    <input type="text"
           placeholder={`Dizzbo ${placeholder} search...`}
           value={searchValue}
           onChange={onChangeHandle}
           onKeyDown={onKeyDownHandle}
           onBlur={onBlurHandle}
           onFocus={onFocusHandle} />
);

export default SearchInput;
