import { IStartup } from "@/data/models";
import { CompaniesState } from "../BuscadorEmpresasProvider";


type CompanyActionType =
   | { type: 'Refresh-Data', payload: IStartup[] }
   | { type: 'Get-One-Post', payload: IStartup }
 


export const companiesReducers = (state: CompaniesState, action: CompanyActionType): CompaniesState => {

   switch (action.type) {
      case 'Refresh-Data':
         return {
            ...state,
            companies: [...action.payload]
         }

      case 'Get-One-Post':
         return {
            ...state,
            companies: [...state.companies, action.payload]
         }

      default:
         return state;
   }

}