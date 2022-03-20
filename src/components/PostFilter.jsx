import React, {useState, useMemo} from "react";
import MyInput from './UI/input/MyInput.jsx'
import MySelect from './UI/select/MySelect.jsx'

function PostFilter({filter, setFilter}) {
  return (
    <div>
      <MyInput
        type="text"
        placeholder="Search..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={(sort) => setFilter({...filter, sort: sort})}
        options={[
          { value: 'title', name: 'title'},
          { value: 'body', name: 'body'}
        ]}
        defaultValue='sorting'
      />
    </div>
  )
}

export default PostFilter;