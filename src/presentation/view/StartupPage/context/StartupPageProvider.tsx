import { FC, useContext, useEffect, useState } from 'react';

import { CompanyRepository } from '@/data/repositories/startup.repository';
import { IEmpleo, IInformacionFinanciera, IInformacionTraccion, IStartup } from '@/data/models';
import { StartupPageContext } from './StartupPageContext';
import { BuscadorEmpresasContext } from '../../BuscadorEmpresasPage/context/BuscadorEmpresasContext';
import { IDataPoint } from '@/data/interfaces';
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { StorageKeysEnum, getOrderDataListFromLastYear, getYearsList, monthsData } from '@/presentation/utilities';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/presentation/routes/routes';


type Props = {
    children: JSX.Element,
};

interface InfoFinancieraMes {
    mes: number,
    ventas: number,
    mercadoPotencial: number,
}

export const StartupPageProvider: FC<Props> = ({ children }) => {

    const { companySelected } = useContext(BuscadorEmpresasContext);

    const [startup, setStartup] = useState<IStartup | null>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const [infoFinancieraLastYear, setInfoFinancieraLastYear] = useState<IInformacionFinanciera[]>([]);

    const [axisVentasPorMes, setAxisVentasPorMes] = useState<IDataPoint[]>([]);
    const [axisVentasPorYear, setAxisVentasPorYear] = useState<IDataPoint[]>([]);
    const [axisVentasPorQrt, setAxisVentasPorQrt] = useState<IDataPoint[]>([]);


    const [empleosLastYear, setEmpleosLastYear] = useState<IEmpleo[]>([]);
    const [axisEmpleados, setAxisEmpleados] = useState<IDataPoint[]>([]);

    const [infoTracionLastYear, setInfoTracionLastYear] = useState<IInformacionTraccion[]>([]);
    const [axisClientesPorMes, setClientesPorMes] = useState<IDataPoint[]>([]);


    let infosFinanciera: InfoFinancieraMes[] = [];

    const localStorage = new LocalStorageProtocol();
    const companyRepository = new CompanyRepository();

    const router = useRouter();

    useEffect(() => {
        const startupId = localStorage.get(StorageKeysEnum.lastCompanyIDSelected);

        if (companySelected) {
            setStartup(companySelected);
            getStartup(companySelected._id);
        }

        else if (!companySelected && startupId !== undefined) {
            getStartup(startupId);
        }

        else {
            router.push(mainRoutes.buscador);
        }

    }, [companySelected])


    useEffect(() => {
        if (startup !== null) {

            const infFinancieraListLastYear: IInformacionFinanciera[] = getOrderDataListFromLastYear(startup.infFinanciera);
            setInfoFinancieraLastYear(infFinancieraListLastYear);

            const dataVentas = getAxisSalesLastYear(infFinancieraListLastYear);
            setAxisVentasPorMes(dataVentas);

            const ventasQrt = getAxisSalesQrt(infFinancieraListLastYear);
            setAxisVentasPorQrt(ventasQrt);

            const dataVentasPorYear = getAxisSalesByYears();
            setAxisVentasPorYear(dataVentasPorYear);


            const listEmpleosLastYear: IEmpleo[] = getOrderDataListFromLastYear(startup.empleo);
            setEmpleosLastYear(listEmpleosLastYear);
            const dataEmpleados = getAxisEmpleadosLastYear(listEmpleosLastYear);
            setAxisEmpleados(dataEmpleados);

            const listInfoTraccionLastYear: IInformacionTraccion[] = getOrderDataListFromLastYear(startup.infTraccion);
            setInfoTracionLastYear(listInfoTraccionLastYear);
            const dataClientesPorMes = getAxisClientesPorMes(listInfoTraccionLastYear);
            setClientesPorMes(dataClientesPorMes);
        }

    }, [startup])


    const getStartup = async (companyId: string) => {
        resetAll();
        setLoading(true);
        try {
            const startupResp: IStartup = await companyRepository.getStartupById(companyId ?? '');
            setStartup(startupResp);
        } catch (error: any) {
            setError(error);
        }
        setLoading(false);
    }

    const resetAll = () => {
        setAxisVentasPorMes([]);
        setAxisEmpleados([]);
        setClientesPorMes([]);
    }

    const getAxisSalesLastYear = (infoFinancieraList: IInformacionFinanciera[]): IDataPoint[] => {

        let dataPoints: IDataPoint[] = [];

        for (const item of infoFinancieraList) {
            const month = item.fecha.getMonth();
            const sales = item.ventas;

            dataPoints.push({
                xAxis: monthsData[month as number],
                yAxis: sales,
            });
        }

        return dataPoints;
    }



    const getAxisSalesByYears = () => {

        let listWitYearsString: IDataPoint[] = [];

        if (startup !== null) {
            const years = getYearsList(startup.infFinanciera);
            infosFinanciera = [];

            for (const year of years) {
                let yearTotal = 0;
                for (const infoFinanciera of startup.infFinanciera) {
                    const date = infoFinanciera.fecha;
                    if (year === date.getFullYear()) {
                        yearTotal += infoFinanciera.ventas;
                    }
                }
                listWitYearsString.push({
                    xAxis: year,
                    yAxis: yearTotal,
                })
            }
        }
        return listWitYearsString;
    }


    const getAxisSalesQrt = (infoFinancieraList: IInformacionFinanciera[]): IDataPoint[] => {
        let dataPoints: IDataPoint[] = [];

        let salesSemestre1 = 0;
        let salesSemestre2 = 0;
        let salesSemestre3 = 0;
        let salesSemestre4 = 0;




        for (const item of infoFinancieraList) {
            const month = item.fecha.getMonth() + 1;

            if (month >= 1 && month <= 3) {
                salesSemestre1 += item.ventas;
            }
            else if (month >= 4 && month <= 6) {
                salesSemestre2 += item.ventas;
            }
            else if (month >= 7 && month <= 9) {
                salesSemestre3 += item.ventas;

            }
            else if (month >= 9 && month <= 12) {
                salesSemestre4 += item.ventas;
            }

            // dataPoints.push({ xAxis: month, yAxis: sales });
        }

        for (const item of infoFinancieraList) {
            const month = item.fecha.getMonth() + 1;
            console.log('month: ', month);
            if (month == 3) {
                dataPoints.push({ xAxis: 'Trimestre 1', yAxis: salesSemestre1 });
            }
            else if (month == 6) {
                dataPoints.push({ xAxis: 'Trimestre 2', yAxis: salesSemestre2 });

            }
            else if (month == 9) {
                dataPoints.push({ xAxis: 'Trimestre 3', yAxis: salesSemestre3 });

            }
            else if (month == 12) {
                dataPoints.push({ xAxis: 'Trimestre 4', yAxis: salesSemestre4 });
            }
        }

        // console.log('dataPoints: ', dataPoints);
        return dataPoints;
    }


    const getAxisEmpleadosLastYear = (empleosList: IEmpleo[]): IDataPoint[] => {

        let listWithMontString: IDataPoint[] = [];
        const dataPoints: IDataPoint[] = [];

        for (const item of empleosList) {
            const month = item.fecha.getMonth();
            const sales = item.empleos;
            dataPoints.push({ xAxis: month, yAxis: sales });
        }

        listWithMontString = dataPoints.map(e => ({
            xAxis: monthsData[e.xAxis as number],
            yAxis: e.yAxis,
        }));


        return listWithMontString;
    }


    const getAxisClientesPorMes = (infoTraccionList: IInformacionTraccion[]): IDataPoint[] => {

        const dataPoints: IDataPoint[] = [];

        for (const item of infoTraccionList) {
            const month = item.fecha.getMonth();
            const clientes = item.usuarios_activo;
            dataPoints.push({
                xAxis: monthsData[(month as number)],
                yAxis: clientes
            });
        }

        return dataPoints;
    }

    return (
        <StartupPageContext.Provider value={{
            startup,
            error,
            loading,
            infoFinancieraLastYear,
            axisVentasPorMes,
            axisVentasPorYear,
            axisVentasPorQrt,
            empleosLastYear,
            axisEmpleados,
            infoTracionLastYear,
            axisClientesPorMes,
        }}>
            {children}
        </StartupPageContext.Provider>
    )
};

