import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  useGetCountriesQuery,
  useGetCountryQuery,
} from "../../features/countries/countriesAPI";
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

import { orderDetails } from "./sampleData";

const Home = () => {
  const gridInstance = useRef(null);
  const { data, isSuccess, isLoading, isError, isFetching, error } =
    useGetCountriesQuery();

  useEffect(() => {
    console.log(data);
    console.log(isSuccess);
  }, [data]);

  return (
    <div>
      <h1>Home</h1>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess &&
        data &&
        data.map((country) => (
          <Link key={country.cca3} to={`/details/${country.cca3}`}>
            {country.name.common}
          </Link>
        ))}
      {/* <GridComponent dataSource={orderDetails} height="350">
        <ColumnsDirective>
          <ColumnDirective
            field="Alpha2Code"
            headerText="alpha2Code"
            width="120"
            textAlign="Right"
          ></ColumnDirective>
          <ColumnDirective
            field="Name"
            headerText="Name"
            width="150"
          ></ColumnDirective>
          <ColumnDirective
            field="Capital"
            headerText="Capital"
            width="130"
            textAlign="Right"
          />
          <ColumnDirective
            field="Actions"
            headerText="Actions"
            width="120"
            textAlign="Right"
          />
        </ColumnsDirective>
      </GridComponent> */}
    </div>
  );
};

export default Home;
