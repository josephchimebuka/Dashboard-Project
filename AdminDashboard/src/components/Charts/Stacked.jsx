import React from 'react'
import {SeriesCollectionDirective, SeriesDirective,Inject, Legend,Category, StackingColumnSeries,Tooltip,ChartComponent} from '@syncfusion/ej2-react-charts'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { stackedCustomSeries } from '../../data/dummy'
const Stacked = ({width,height}) => {
  const data = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83
    }
  ];
  return (
    <>
   <ChartComponent
   width={width}
   height={height}
   id='stack chart'
   primaryXAxis={stackedCustomSeries}>
    <Inject services={[Legend,
       Category,
       StackingColumnSeries,
       Tooltip]}/>
   </ChartComponent>


   <GridComponent dataSource={data}>
      <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' width='100'/>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' width='100'/>
      </ColumnsDirective>
    </GridComponent>
       </>
  )
}

export default Stacked