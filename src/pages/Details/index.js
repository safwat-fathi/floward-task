import React, { useEffect } from "react";

import { useGetCountryQuery } from "../../features/countries/countriesAPI";

import "./styles.scss";

const Details = (props) => {
  const { code } = props.match.params;
  const { data, isSuccess, isLoading, isError, isFetching, error } =
    useGetCountryQuery(code);

  useEffect(() => {
    isSuccess && console.log(data[0]);
    // isSuccess &&
    //   console.log(
    //     data[0].name.nativeName[Object.keys(data[0].name.nativeName)[1]]
    //       .official
    //   );
  }, [data]);

  return (
    <div className="details">
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && data && (
        <>
          <h1>Details</h1>
          <ul>
            <li>country cca3 code: {code}</li>
            <li>country official name in English: {data[0].name.official}</li>
            <li>
              country official name in native:{" "}
              {
                data[0].name.nativeName[Object.keys(data[0].name.nativeName)[1]]
                  .official
              }
            </li>
            <li>country ccn3 code: {data[0].ccn3}</li>
            {/* <li>country currencies: {data[0].currencies}</li> */}
            <li>country flag: {data[0].flag}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Details;
