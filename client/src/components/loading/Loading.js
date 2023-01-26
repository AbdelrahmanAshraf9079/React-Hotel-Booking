import "./loading.css";
import React from "react";
import ReactLoading from "react-loading";

const loading = () => {



    return (
        <div className="loading">
          <ReactLoading type="cylon" color="#003580" />
        </div>
        )
        
};

export default loading;