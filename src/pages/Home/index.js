import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCountriesQuery } from "../../features/countries/countriesAPI";
// syncfusion
import { closest, isNullOrUndefined } from "@syncfusion/ej2-base";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Filter,
  Inject,
  VirtualScroll,
  Sort,
} from "@syncfusion/ej2-react-grids";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const gridInstance = useRef(null);

  const { data, isSuccess, isLoading, isError, isFetching, error } =
    useGetCountriesQuery();

  const [columns, setColumns] = useState([]);

  const actionTemplate = (country) => {
    return (
      <div>
        <Link to={`/details/${country.code}`}>
          <FontAwesomeIcon icon={faEye} />
        </Link>
      </div>
    );
  };

  useEffect(() => {
    if (isSuccess) {
      // console.log(data.slice(0, 3));

      let columns = data.slice(0, 3).map((country) => {
        return {
          code: country.cca3,
          name: country.name.common,
          capital: country.capital,
        };
      });

      setColumns(columns);
    }
  }, [data]);

  return (
    <div>
      <h1>Home</h1>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && data && (
        <GridComponent ref={gridInstance} dataSource={columns}>
          <ColumnsDirective>
            <ColumnDirective
              field="code"
              headerText="Alpha2Code"
              width="120"
              textAlign="Right"
            ></ColumnDirective>
            <ColumnDirective
              field="name"
              headerText="Name"
              width="150"
            ></ColumnDirective>
            <ColumnDirective
              field="capital"
              headerText="Capital"
              width="130"
              textAlign="Right"
            />
            <ColumnDirective
              headerText="Action"
              width="130"
              textAlign="Right"
              template={actionTemplate}
            ></ColumnDirective>
          </ColumnsDirective>
        </GridComponent>
      )}
    </div>
  );
};

export default Home;
