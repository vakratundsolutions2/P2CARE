import { Pagination } from 'antd';
import React from 'react'


const Paginations = (props) => {
    const {limit ,current,total} =props
    console.log(props);

  return (
    <>
      
        <Pagination current={current} total={total} defaultPageSize={limit} />
      
    </>
  );
}

export default Paginations