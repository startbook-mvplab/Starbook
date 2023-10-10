import { FC, useEffect, useReducer, useRef, useState } from 'react';
import { companiesReducers } from './reducers/buscadorEmpresasReducers';

import { CompanyRepository } from '@/data/repositories/startup.repository';
import { IStartup } from '@/data/models';
import { BuscadorEmpresasContext } from './BuscadorEmpresasContext';
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { SectorEnum, StorageKeysEnum, modelosNegocios } from '@/presentation/utilities';


export interface CompaniesState {
    companies: IStartup[],
}

const COMPANIES_INITIAL_STATE: CompaniesState = {
    companies: []//companiesJson,
}

type Props = {
    children: JSX.Element,
};

export const BuscadorEmpresasProvider: FC<Props> = ({ children }) => {

    //----------------------------Search Companies--------------------------------------
    const [companiesState, dispatchCompanies] = useReducer(companiesReducers, COMPANIES_INITIAL_STATE);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const [searchComplete, setSearchComplete] = useState<boolean>(false);

    const [companySelected, setCompanySelected] = useState<IStartup | null>(null);

    const isFirstRender = useRef(true);

    const [modeloNegocioIndex, setModeloNegocioIndex] = useState<number>(0);

    const changeModeloNegocioIndex = (event: React.SyntheticEvent, newValue: number) => {
        setModeloNegocioIndex(newValue);
    };

    const [sector, setSector] = useState<string>(SectorEnum.todos);

    const handleSector = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSector(event.target.value || '');
    };

    const localStorage = new LocalStorageProtocol();
    const companyRepository = new CompanyRepository();

    const resetToInitialState = () => {
        dispatchCompanies({ type: 'Refresh-Data', payload: COMPANIES_INITIAL_STATE.companies });
        setError(null);
        setLoading(true);
    }

    const resetSearch = () => {
        setError(null);
        setLoading(false);
        setModeloNegocioIndex(0);
        setSector(SectorEnum.todos)

        dispatchCompanies({ type: 'Refresh-Data', payload: [] });
    }

    const handleCompanySelected = (company: IStartup) => {
        setCompanySelected(company);
        dispatchCompanies({ type: 'Refresh-Data', payload: [] });
        setSearchQuery('')
        localStorage.set(StorageKeysEnum.lastCompanyIDSelected, company._id as any);

    }


    useEffect(() => {
        setSearchComplete(false);
    }, [searchQuery])


    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            searchCompanies(searchQuery);
        }
    }, [modeloNegocioIndex, sector])




    const searchCompanies = async (name?: string) => {
        // if (searchQuery === '') {
        //     dispatch(showSnackbar({
        //         message: 'Escriba algo para buscar',
        //         open: true,
        //         alertColor: 'error'
        //     }));
        //     return;
        // }

        try {
            console.log('buscando empresas...');
            console.log('================================================');
            console.log('Filtros: ');
            console.log('Nombre: ', searchQuery);
            console.log('Modelo de negocio: ', modelosNegocios[modeloNegocioIndex]);
            console.log('Sector ', sector);
            resetToInitialState();

            const companyName = name ?? searchQuery;

            const companiesResp = await companyRepository.searchCompaniesWithFilters({
                startupName: (searchQuery === '') ? undefined : companyName,
                sector: (sector === SectorEnum.todos) ? undefined : sector,
                tipo_modelo_negocio: (modeloNegocioIndex === 0) ? undefined : modelosNegocios[modeloNegocioIndex],
            });
            console.log(companiesResp);

            setSearchComplete(true);

            dispatchCompanies({ type: 'Refresh-Data', payload: companiesResp });

        } catch (error: any) {
            setError(error);
        }
        setLoading(false);

    }

    // const getInitialCompanies = async () => {
    //     // resetToInitialState();
    //     const companiesResp = await companyRepository.searchStartupByName('');
    //     console.log('----------------------------------------');
    //     console.log(companiesResp);
    //     dispatchCompanies({ type: 'Refresh-Data', payload: companiesResp });
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     getInitialCompanies();
    // }, [])

    return (
        <BuscadorEmpresasContext.Provider value={{
            ...companiesState,
            error,
            loading,
            searchQuery,
            setSearchQuery,
            resetSearch,
            // setSearchQuery,
            searchCompanies,
            searchComplete,
            companySelected,
            handleCompanySelected,
            // setCompanySelected,
            modeloNegocioIndex,
            changeModeloNegocioIndex,
            sector,
            handleSector,
        }}>
            {children}
        </BuscadorEmpresasContext.Provider>
    )
};