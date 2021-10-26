import React,{useEffect} from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {debounce, result} from 'lodash'

export default function Search(props) {
      let {keywords,autoCompleteSearch}=props
      let items=[]
      keywords.map((d,i)=>{
        items.push({
            id:i,
            name:d.Title
        })
      })
      const handleOnSearch =debounce ((string, results) => {
        // if(results.length===0){
            autoCompleteSearch(string)
        // }
      },1000)
    
      const handleOnSelect = (item) => {
        autoCompleteSearch(item.name)
      }
    
    
      const formatResult = (item) => {
        return item;
      }
    return (
        <div>
            <div style={{ width: '100%' }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
          />
        </div>
        </div>
    )
}
