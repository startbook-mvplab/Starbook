import { IStartup } from "@/data/models";
import { createContext } from "react";


interface ContextProps {
        companies: IStartup[],
        companySelected: IStartup | null,
        handleCompanySelected: (company: IStartup) => void,
        // setCompanySelected: React.Dispatch<React.SetStateAction<IStartup | null>>,
        resetSearch: () => void,
        error: Error | null;
        loading: boolean;
        searchQuery: string,
        setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
        searchCompanies: (name?: string) => void,
        searchComplete: boolean,
        modeloNegocioIndex: number,
        changeModeloNegocioIndex: (event: React.SyntheticEvent, newValue: number) => void,
        sector: string,
        handleSector: (event: React.ChangeEvent<HTMLInputElement>) => void,

}


export const BuscadorEmpresasContext = createContext({} as ContextProps);