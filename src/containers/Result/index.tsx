import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from "antd";
import { PATH_LANDING_PAGE } from "../../utils/paths";

const DataResults = {
    not_found : {
        status : "404",
        title : "404",
        subTitle: "Sorry, the page you visited does not exist.",
        lblBtnBack: "Back Home"
    }
}

const NotFound: React.FC = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
            <Link to={PATH_LANDING_PAGE}>
                <Button type="primary">Back Home</Button>
            </Link>}
        />
    );
}

export {
    NotFound
}