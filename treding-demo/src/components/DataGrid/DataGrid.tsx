import { useTheme } from "@mui/material";
import { ColDef, RowClickedEvent } from "ag-grid-community";
import React, { useState } from "react";
interface DataGridProps<T> {
  showNoRowsOverlay?: boolean;
  size: { height: number | string; width: number | string };
  gridData: T[];
  colDef: ColDef[];
  rowClickHandler?: (event: RowClickedEvent) => void;
}
export const DataGrid = <T,>({
  showNoRowsOverlay,
  size,
  gridData,
  colDef,
  rowClickHandler = undefined,
}: DataGridProps<T>): JSX.Element => {
  const [gridApi, setGridApi] = useState();
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const { palette } = useTheme();
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };
  return <div>DataGrid</div>;
};
