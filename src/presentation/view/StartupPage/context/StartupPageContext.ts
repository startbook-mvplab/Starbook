import { IDataPoint } from "@/data/interfaces";
import { IEmpleo, IInformacionFinanciera, IInformacionTraccion, IStartup } from "@/data/models";
import { createContext } from "react";


interface ContextProps {
        startup: IStartup | null,
        error: Error | null;
        loading: boolean;
        //-------------Ventas-------------
        infoFinancieraLastYear: IInformacionFinanciera[],
        axisVentasPorMes: IDataPoint[],
        axisVentasPorYear: IDataPoint[],
        axisVentasPorQrt: IDataPoint[],
        //--------------------------------
        empleosLastYear: IEmpleo[],
        axisEmpleados: IDataPoint[],
        //--------------------------------
        infoTracionLastYear: IInformacionTraccion[],
        axisClientesPorMes: IDataPoint[],

}

export const StartupPageContext = createContext({} as ContextProps);