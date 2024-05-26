import { ReactNode } from 'react';

import { Loading } from 'components/Loading';

interface ITable {
  headers: string[];
  isLoaded?: boolean;
  data?: any[];
  dataKeys?: string[];
  actionButtons?: ((item: any) => ReactNode)[];
}
export const Table = ({ headers, isLoaded, data, dataKeys, actionButtons }: ITable) => {
  if (!isLoaded) {
    return (
      <div className="w-full h-96 items-center justify-center">
        <Loading />
      </div>
    );
  }
  const access = (object: any, path: string) => {
    const value = path?.split('.')?.reduce((o, i) => o && o[i], object);
    console.log(value);
    // If value is an object, convert it to a string or return a specific property
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    return value;
  };


  return (
    <div className="overflow-x-auto w-full ">
      <table className=" w-full text-gray-700">
        <thead className="border-gray-200 border-b-2">
          <tr>
            {headers.map((header, index) => (
              <th key={header + index} className="py-4 px-12">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((data, index) => (
            <tr key={data+index}>
              {dataKeys?.map((key) => (
                <td className="py-4">{access(data, key)}</td>
              ))}
              {actionButtons?.map((btn) => (<td key={btn.toString()}> {btn(data)}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
